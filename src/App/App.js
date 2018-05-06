import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { ContainerEx, TabContentEx, AlertEx, JumbotronEx, ContainerBF, TabsEx, InputWrapper } from '../style/App.style';
import InputField from '../Container/InputField/InputField';
import checkPlace from '../GetApi/SearchData';
import getWeather from '../GetApi/ForecastData';
import CurrentPosition from '../GetApi/CurrentData';
import DataReport from '../Container/DataReport/DataReport';
import CurrentLocation from '../Component/CurrentLocation/CurrentLocation';

class App extends Component {
  constructor() {
    super();

    this.state = {
      weather: {},
      drawData: [],
      currentPosition: {},
      currentPositionData: {},
      renderCurrentPlace: false
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      this.setState({
        currentPosition: {
          lat, lng
        }
      });
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      await CurrentPosition(this.state.currentPosition.lat, this.state.currentPosition.lng)
        .then(data => this.setState({ currentPositionData: data, renderCurrentPlace: true }));
    }
  }

  async onSubmit(cityName) {
    const check = await checkPlace(cityName);
    if (check.length !== 0) {
      const weather = await getWeather(cityName);
      const drawArray = [];
      weather.forecast.map((day) => {
        const drawData = {
          name: day.date,
          avg: day.weatherData.avgtemp_c,
          max: day.weatherData.maxtemp_c,
          min: day.weatherData.mintemp_c
        };
        return drawArray.push(drawData);
      });
      this.setState({
        weather,
        drawData: drawArray,
      });
    } else {
      this.setState({
        isErr: 'Bad Request',
        weather: {},
        drawData: [],
      });
    }
  }

  render() {
    const Jumbo = {
      display: ''
    }
    if (this.state.renderCurrentPlace === false) {
      Jumbo.display = <div>
        <h4>Weather Forecast</h4>
        <p>Enter a Place name:</p>
        <InputField onSubmit={cityName => this.onSubmit(cityName)} />
      </div>
    } else {
      Jumbo.display = <div>
        <CurrentLocation data={this.state.currentPositionData} />
        <h6>Check Weather in the other places</h6>
        <InputField onSubmit={cityName => this.onSubmit(cityName)} />
      </div>
    }
    return (
      <ContainerEx fluid={true}>
        <ReactCSSTransitionGroup
          transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}
        >
          {this.state.drawData.length !== 0 ?
            <ContainerBF key="renderAfter" fluid={true}>
              <InputWrapper>
                <InputField onSubmit={cityName => this.onSubmit(cityName)} />
              </InputWrapper>
              <DataReport data={this.state.weather} drawData={this.state.drawData} />
            </ContainerBF>
            :
            <JumbotronEx key="renderBefore">
              {Jumbo.display}
            </JumbotronEx>
          }
        </ReactCSSTransitionGroup>
      </ContainerEx>
    );
  }
}

export default App;
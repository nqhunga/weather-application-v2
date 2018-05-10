import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';
import { ContainerEx, TabContentEx, AlertEx, JumbotronEx, ContainerBF, TabsEx, InputWrapper, JumboDisplay, Spinner } from '../style/App.style';
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
      renderCurrentPlace: false,
      loading: false,
      isErr: ''
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

  onSubmit(cityName) {
    this.setState({ loading: true }, () => {
      checkPlace(cityName).then(data => {
        const drawArray = [];
        if (data.length !== 0) {
          getWeather(cityName).then(data => {
            data.forecast.map((day) => {
              const drawData = {
                name: day.date,
                avg: day.weatherData.avgtemp_c,
                max: day.weatherData.maxtemp_c,
                min: day.weatherData.mintemp_c
              };
              return drawArray.push(drawData);
            });
            this.setState({
              loading: false,
              weather: data,
              drawData: drawArray,
              isErr: '',
            });
          });
        } else {
          this.setState({
            isErr: 'Bad Request',
            loading: false
          });
        }
      });
    })
  }

  render() {
    const Jumbo = {
      display: ''
    }
    if (this.state.renderCurrentPlace === false) {
      Jumbo.display = <JumboDisplay>
        <h4>Weather Forecast</h4>
        <p>Enter a Place name:</p>
        <InputField onSubmit={cityName => this.onSubmit(cityName)} />
      </JumboDisplay>
    } else {
      Jumbo.display = <JumboDisplay>
        <h6>Check Weather at other places</h6>
        <InputField onSubmit={cityName => this.onSubmit(cityName)} />
        <CurrentLocation data={this.state.currentPositionData} />
      </JumboDisplay>
    }
    return (
      <ContainerEx fluid={true}>
        {this.state.loading ? <Spinner><FontAwesomeIcon icon={faSpinner} size="6x" spin pulse /></Spinner> :
          <ReactCSSTransitionGroup
            transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}
          >
            {this.state.drawData.length !== 0 ?
              <ContainerBF key="renderAfter" fluid={true}>
                <InputWrapper>
                  {this.state.isErr ? <AlertEx color="danger">{this.state.isErr}</AlertEx> : ''}
                  <InputField onSubmit={cityName => this.onSubmit(cityName)} />
                </InputWrapper>
                <DataReport data={this.state.weather} drawData={this.state.drawData} />
              </ContainerBF>
              :
              <JumbotronEx key="renderBefore">
                {Jumbo.display}
                {this.state.isErr ? <AlertEx color="danger">{this.state.isErr}</AlertEx> : ''}
              </JumbotronEx>
            }
          </ReactCSSTransitionGroup>
        }

      </ContainerEx>
    );
  }
}

export default App;
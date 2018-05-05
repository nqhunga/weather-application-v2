import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { ContainerEx, TabContentEx, AlertEx, JumbotronEx, ContainerBF, TabsEx, InputWrapper } from '../style/App.style';
import InputField from '../Container/InputField/InputField';
import checkPlace from '../GetApi/SearchData';
import getWeather from '../GetApi/ForecastData';
import DataReport from '../Container/DataReport/DataReport';

class App extends Component {
  constructor() {
    super();

    this.state = {
      weather: {},
      drawData: []
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
              <h4>Weather Forecast</h4>
              <p>Enter a Place name:</p>
              <InputField onSubmit={cityName => this.onSubmit(cityName)} />
            </JumbotronEx>
          }
        </ReactCSSTransitionGroup>
      </ContainerEx>
    );
  }
}

export default App;
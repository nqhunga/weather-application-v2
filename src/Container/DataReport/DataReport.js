import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TabContent, NavWrapper, NavTab, DataWrapper } from './DataReport.style';
import CurrentReport from '../../Component/CurrentReport/CurrentReport';
import Chart from '../../Component/Chart/Chart';
import ForecastReport from '../../Component/ForecastReport/ForecastReport';

class DataReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: this.props.data,
      drawData: this.props.drawData,
      activeTab: '1',
      activeTab1: true,
      activeTab2: false,
      activeTab3: false
    }
    this.Tab1 = this.Tab1.bind(this);
    this.Tab2 = this.Tab2.bind(this);
    this.Tab3 = this.Tab3.bind(this);

  }
  Tab1() {
    this.setState({
      activeTab: '1',
      activeTab1: true,
      activeTab2: false,
      activeTab3: false
    });
  }
  Tab2() {
    this.setState({
      activeTab: '2',
      activeTab1: false,
      activeTab2: true,
      activeTab3: false
    });
  }
  Tab3() {
    this.setState({
      activeTab: '3',
      activeTab1: false,
      activeTab2: false,
      activeTab3: true
    });
  }
  render() {
    const tab = {
      display: undefined
    };
    switch (this.state.activeTab) {
      case '1':
        tab.display = <CurrentReport key="tab1" data={this.state.weather} />
        break;
      case '2':
        tab.display = <Chart key="tab2" data={this.state.drawData} />
        break;
      case '3':
        tab.display = <ForecastReport key="tab3" data={this.state.weather.forecast} />
        break;
      default:
        tab.display = <CurrentReport key="tab1" data={this.state.weather} />
    }
    return (
      <DataWrapper >
        <Nav tabs>
          <NavItem>
            <NavLink active={this.state.activeTab1 ? true : false} onClick={this.Tab1}>General</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={this.state.activeTab2 ? true : false} onClick={this.Tab2}>Chart</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={this.state.activeTab3 ? true : false} onClick={this.Tab3}>7Days Forecast</NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <ReactCSSTransitionGroup transitionName="changeTab" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            {tab.display}
          </ReactCSSTransitionGroup>
        </TabContent>
      </DataWrapper>
    );
  }
}

export default DataReport;
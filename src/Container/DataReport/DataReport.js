import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { TabContent, NavWrapper, NavTab, DataWrapper, TabWrapper, TabItem, NavLinkEx } from './DataReport.style';
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
            <NavLinkEx active={this.state.activeTab1 ? true : false} onClick={this.Tab1}>General</NavLinkEx>
          </NavItem>
          <NavItem>
            <NavLinkEx active={this.state.activeTab2 ? true : false} onClick={this.Tab2}>Chart</NavLinkEx>
          </NavItem>
          <NavItem>
            <NavLinkEx active={this.state.activeTab3 ? true : false} onClick={this.Tab3}>7Days Forecast</NavLinkEx>
          </NavItem>
        </Nav>
        <TabWrapper>
          <TabItem id="tab1" className={this.state.activeTab1 ? 'active' : ''} >
            <CurrentReport key="tab1" data={this.state.weather} />
          </TabItem>
          <TabItem id="tab2" className={this.state.activeTab2 ? 'active' : ''}>
            <Chart key="tab2" data={this.state.drawData} />
          </TabItem>
          <TabItem id="tab3" className={this.state.activeTab3 ? 'active' : ''}>
            <ForecastReport key="tab3" data={this.state.weather.forecast} />
          </TabItem>
        </TabWrapper>
      </DataWrapper>
    );
  }
}

{/* <TabContent>
          <ReactCSSTransitionGroup transitionName="changeTab" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            {tab.display}
          </ReactCSSTransitionGroup>
        </TabContent> */}

export default DataReport;
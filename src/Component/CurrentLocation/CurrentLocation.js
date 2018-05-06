import React from 'react';
import styled from 'styled-components';

const CurrentWrapper = styled.div`
  margin: 0 auto;
  padding: 0 30px 30px 0;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 22px;
  }
  p{
    font-size: 18px;
  }

  @media (max-width: 576px) {
    h3 {
      font-size: 15px;
    }
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 17px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 992px) {
  }
`;

const LeftPanel = styled.div``;

const RightPanel = styled.div``;

const CurrentIcon = styled.img``;

const Header = styled.span`
  display: flex;
  flex-direction: row;
`;

const CurrentLocation = (props) => {
  const CurrentData = props.data;
  return (
    <CurrentWrapper>
      <LeftPanel>
        <Header><p className="lead">Your Location: </p><h3> {CurrentData.location.name}</h3></Header>
        <p className="lead">Region: {CurrentData.location.region} - Country: {CurrentData.location.country}</p>
        <p className="lead">Local Time: {CurrentData.location.localtime}</p>
      </LeftPanel>
      <RightPanel>
        <span><CurrentIcon src={CurrentData.current.condition.icon} /> {CurrentData.current.condition.text}</span>
        <p className="lead">Temperature(Celsius): {CurrentData.current.temp_c}</p>
        <p className="lead">Feels like(Celsius): {CurrentData.current.feelslike_c}</p>
        <p className="lead">Humidity(%): {CurrentData.current.humidity}</p>
        <p className="lead">Wind Speed(Km/h): {CurrentData.current.wind_kph}</p>
      </RightPanel>


    </CurrentWrapper>
  )
}

export default CurrentLocation;
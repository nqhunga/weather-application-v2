import React from 'react';
import styled from 'styled-components';

const CurrentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 30px;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
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

const CurrentIcon = styled.img``;

const CurrentReport = (props) => {
  const CurrentData = props.data;
  return (
    <CurrentWrapper>
        <h3>{CurrentData.location.name}</h3>
        <p className="lead">Region: {CurrentData.location.region} - Country: {CurrentData.location.country}</p>
        <p className="lead">Local Time: {CurrentData.location.localtime}</p>
        <span className="lead"><CurrentIcon src={CurrentData.forecast[0].weatherData.condition.icon} /> {CurrentData.forecast[0].weatherData.condition.text}</span>
        <p className="lead">Temperature(Celsius): {CurrentData.current.temp_c}</p>
        <p className="lead">Feels like(Celsius): {CurrentData.current.feelslike_c}</p>
        <p className="lead">Humidity(%): {CurrentData.current.humidity}</p>
        <p className="lead">Wind Speed(Km/h): {CurrentData.current.wind_kph}</p>
    </CurrentWrapper>
  )
}

export default CurrentReport;
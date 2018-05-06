import React from 'react';
import { Card, CardImg, CardGroup, CardBody, CardTitle, CardSubtitle, CardText, CardHeader } from 'reactstrap';
import styled from 'styled-components';

const CardGroupEx = styled(CardGroup)`
  margin: 0 auto;
  padding: 10px;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`;

const CardEx = styled(Card)`
  font-size: 12px;
  @media (max-width: 576px) {
    font-size: 6px
  }
  @media (max-width: 768px) {
    font-size: 8px;
  }
  @media (max-width: 992px) {
    font-size: 10px;
  }
`;

const CardTitleEx = styled(CardTitle)``;

const CardSubtitleEx = styled(CardSubtitle)`
  font-weight: normal;
  font-size: 16px;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    font-size: 8px;
    margin-top: 1.5px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    margin-top: 3px;
  }
  @media (max-width: 992px) {
    font-size: 12px;
    margin-top: 5px;
  }
`;

const CardImgEx = styled(CardImg)`
  width: 40%;
  
  @media (max-width: 576px) {
    max-width: 100%;
    width: auto;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    width: auto;
  }
  @media (max-width: 992px) {
    max-width: 100%;
    width: auto;
  }
`;

const CardBodyEx = styled(CardBody)`
  p {
    font-size: 14px;
  }
  h5 {
    font-size: 18px;
  }
@media (max-width: 576px) {
  padding: 2px;
  p {
    font-size: 6px
  }
  h5 {
    font-size: 10px;
  }
}
@media (max-width: 768px) {
  padding: 5px;
  p {
    font-size: 8px
  }
  h5 {
    font-size: 12px;
  }
}
@media (max-width: 992px) {
  padding: 7px;
  p {
    font-size: 10px
  }
  h5 {
    font-size: 14px;
  }
}
`;

const CardTextEx = styled(CardText)``;

const CardHeaderEx = styled(CardHeader)`
  display: flex;
  flex-direction: row;
  height: 100px;
  padding: 10px;
  text-align: center;

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 5px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 7px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 10px;
  }
 
`;


const ForecastReport = (props) => {
  const report = props.data.map((value) => (
    <CardEx key={value.date}>
      <CardHeaderEx>
        <CardImgEx top width="100%" src={value.weatherData.condition.icon} />
        <CardSubtitleEx className="lead">{value.weatherData.condition.text}</CardSubtitleEx>
      </CardHeaderEx>
      <CardBodyEx>
        <CardTitleEx>Day {value.date}</CardTitleEx>
        <p className="lead">Avg(&#8451;): {value.weatherData.avgtemp_c}</p>
        <p className="lead">Max(&#8451;): {value.weatherData.maxtemp_c}</p>
        <p className="lead">Min(&#8451;): {value.weatherData.mintemp_c}</p>
        <p className="lead">Wind(Km/h): {value.weatherData.maxwind_kph}</p>
      </CardBodyEx>
    </CardEx>
  ));
  return (
    <CardGroupEx>
      {
        report
      }
    </CardGroupEx>
  );
}

export default ForecastReport;
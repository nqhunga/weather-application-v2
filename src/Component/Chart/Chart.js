import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 10px;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  width: 100%;

  @media (max-width: 576px) {
    width: 100%;
    
    .recharts-surface {
      width: 70%;
    }
    .recharts-legend-wrapper {
      width: 70% !important;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    .recharts-surface {
      width: 70%;
    }
    .recharts-legend-wrapper {
      width: 70% !important;
    }
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const ChartHeader = styled.h3``;

const Chart = (props) => {
  return (
    <ChartWrapper className="fixed-size">
      <ChartHeader>Temperature(Celsius) Chart</ChartHeader>
      <LineChart
        width={600}
        height={300}
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="avg" stroke="#8884d8" />
        <Line type="monotone" dataKey="max" stroke="#82ca9d" />
        <Line type="monotone" dataKey="min" stroke="#82ca9d" />
      </LineChart>
    </ChartWrapper>
  );
}

export default Chart;
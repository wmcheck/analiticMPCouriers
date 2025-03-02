import React from 'react';
import { Column } from '@ant-design/plots';


const MetricItem = (props) => {
  const { data } = props;

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    isPercent: true,
    isStack: true,
    legend: false,
    color: ['#8fbc8f', '#ffd700', '#ff4500', '#87f4d0'],
  };
  return <Column {...config} />;
};

export default MetricItem
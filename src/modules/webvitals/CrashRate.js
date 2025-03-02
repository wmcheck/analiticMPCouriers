import React from 'react';
import { Line } from '@ant-design/plots';


const CrashRate = (props) => {
  const { data } = props;

  const config = {
    data,
    padding: 'auto',
    xField: 'version',
    yField: 'crash',
    smooth: true,
    lineStyle: {
      lineWidth: 2,    
      cursor: 'pointer'
    },
  };

  return (
  <>
    <div style={{marginBottom: '10px'}}><b>Crash Free Session Rate</b><br />Частота сеансов без сбоев (в процентах)</div>
    <Line {...config} />
  </>
  );
};

export default CrashRate;
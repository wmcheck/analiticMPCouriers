import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { Bar } from '@ant-design/plots';
import { Popover } from 'antd';

const GoogleGrade = () => {
  const data = [
    {
      type: '★★★★★',
      count: 444,
      delta: "",
    },
    {
      type: '+1 ★★★★',
      count: 76,
      delta: "",
    },
    {
      type: '★★★',
      count: 70,
      delta: "",
    },
    {
      type: '+2 ★★',
      count: 56,
      delta: "",
    },
    {
      type: '+1 ★',
      count: 427,
      delta: "",
    }
  ];
  const config = {
    data,
    xField: 'count',
    yField: 'type',
    legend: {
      position: 'top-left',
    },
    barBackground: {
      style: {
        fill: 'rgba(0,0,0,0.1)',
      },
    },
    interactions: [
      {
        type: 'active-region',
        enable: true,
      },
    ],
  };


  const content1 = (
    <div>
      <p>Рассчитана на основе последних оценок.</p>
    </div>
  );
  const content2 = (
    <div>
      <p>Средняя оценка с момента публикации.</p>
    </div>
  );

  return (
  <>
    <div style={{display: 'flex', gap: '60px', paddingBottom: '30px'}}>
      <div>
        <div style={{marginBottom: '10px'}}>Google Play</div>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px"><path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"/></svg>        
      </div>
      <div>
        <Popover content={content1} title="Информация" trigger="hover">
        <div style={{marginBottom: '10px'}}>Оценка (по умолчании)</div>
        <h2 style={{margin: '0'}}><StarFilled /> 2.990 </h2>
        <small>+0.09</small>
        </Popover>
      </div> 
      <div>
        <Popover content={content2} title="Информация" trigger="hover">
        <div style={{marginBottom: '10px'}}>Средняя оценка (за все время)</div>
        <h2 style={{margin: '0'}}><StarFilled /> 2.991 </h2>
        <small> +0.003</small>
        </Popover>
      </div>  
      <div>
        <div style={{marginBottom: '10px'}}>Оценки:</div>
        <div><h2 style={{margin: '0'}}>1048 </h2>
        <small> +4</small></div>
      </div>
      {/* <div>
        <div style={{marginBottom: '10px'}}>Оценки с отзывами:</div>
        <div><h2 style={{margin: '0'}}>516</h2> 
        <small></small></div>
      </div> */}
    </div>

    <div>
    <Bar style={{height: '100px'}} {...config} />
    </div>
  </>
  );
};

export default GoogleGrade;
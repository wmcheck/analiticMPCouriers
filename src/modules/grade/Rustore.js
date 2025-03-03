import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { Bar } from '@ant-design/plots';

const RustoreGrade = () => {
  const data = [
    {
      type: '★★★★★',
      count: 24,
      delta: "",
    },
    {
      type: '★★★★',
      count: 3,
      delta: "",
    },
    {
      type: '★★★',
      count: 5,
      delta: "",
    },
    {
      type: '★★',
      count: 5,
      delta: "",
    },
    {
      type: '★',
      count: 15,
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

  return (
  <>
    <div style={{display: 'flex', gap: '150px', paddingBottom: '30px'}}>
      <div>
        <div style={{marginBottom: '10px'}}>RuStore</div>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.103 27.891C4.205 30 7.589 30 14.357 30h1.197c6.768 0 10.152 0 12.254-2.109 2.103-2.109 2.103-5.503 2.103-12.291v-1.2c0-6.788 0-10.182-2.103-12.291C25.706 0 22.322 0 15.554 0h-1.197C7.59 0 4.205 0 2.103 2.109 0 4.218 0 7.612 0 14.399v1.2c0 6.79 0 10.183 2.103 12.292zm20.99-7.95l-2.022-.507a.587.587 0 01-.423-.545l-.252-7.46c-.073-.988-.804-1.773-1.568-2.005a.103.103 0 00-.114.042.088.088 0 00.02.117c.189.147.708.625.708 1.449l-.002 9.754a1.45 1.45 0 01-1.802 1.404l-2.053-.515a.59.59 0 01-.393-.537l-.252-7.461c-.073-.987-.804-1.773-1.568-2.004a.103.103 0 00-.114.041.088.088 0 00.02.118c.189.146.709.623.709 1.447l-.002 9.757a1.45 1.45 0 01-1.802 1.403l-5.797-1.452a1.81 1.81 0 01-1.37-1.754v-9.77a1.45 1.45 0 011.802-1.403l3.652.915V9.214a1.45 1.45 0 011.803-1.404l3.652.915V6.964a1.45 1.45 0 011.803-1.403l5.797 1.452a1.81 1.81 0 011.37 1.754v9.77a1.45 1.45 0 01-1.802 1.403z" fill="#000"></path></svg>
        
      </div>  
      <div>
        <div style={{marginBottom: '10px'}}>Средняя оценка</div>
        <h2 style={{margin: '0'}}><StarFilled /> 3.3</h2><small></small>
      </div>  
      <div>
        <div style={{marginBottom: '10px'}}>Оценки:</div>
        <div><h2 style={{margin: '0'}}> 52</h2> <small> </small></div>
      </div>
    </div>  
    <Bar style={{height: '100px'}} {...config} />
    
  </>
  );
};

export default RustoreGrade;
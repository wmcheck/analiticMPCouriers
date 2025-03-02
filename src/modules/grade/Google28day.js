import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import Papa from "papaparse";

var commonConfig = { delimiter: ";" };

const GoogleGrade28Day = () => {
  const [data, setData] = useState([]);
  
  function parseAvgGrade() {
    Papa.parse(
       "./data/Google28Day.csv",
      {
        ...commonConfig,
        header: false,
        download: true,
        complete: (result) => {
          let x = [];
          //console.log('grade', result);

          result.data.forEach(element => {

            let d = element[0];
            let g = element[1].replace(",", '.') * 1;
            x.push({"Date": d, "count": g});
          })

          setData(x);
          //console.log('grade', x);
        }  
      }
    )
  }

  useEffect(() => {
    parseAvgGrade();
  }, []);

  const config = {
    data,
    //padding: '40px',
    xField: 'Date',
    yField: 'count',
    xAxis: {
      //type: 'timeCat',
      tickCount: 0,
    },
  
    annotations: [
      {
        type: 'regionFilter',
        start: ['min', 'median'],
        end: ['max', '0'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', 'median'],
        content: 'Средняя',
        offsetY: -4,
        style: {
          textBaseline: 'bottom',
        },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: '#F4664A',
          lineDash: [2, 2],
        },
      },
    ],
  };

  return (
  <>
    <div style={{marginBottom: '10px'}}>Средняя оценка за все время (28 дневные периоды)</div>
    <Line {...config} />
  </>
  );
};

export default GoogleGrade28Day;
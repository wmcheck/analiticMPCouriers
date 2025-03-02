import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import Papa from "papaparse";

const commonConfig = { delimiter: ";" };
const GoogleMonth = () => {

  const [data, setData] = useState([]);
  
  function parseAvgGrade() {
    Papa.parse(
       "./data/GoogleAvg.csv",
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
    padding: 'auto',
    xField: 'Date',
    yField: 'count',
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
    <div>
      <div style={{marginBottom: '10px'}}>Средняя оценка за все время (по месяцам)</div>
    <Line {...config} />
    </div>
  </>
  );
};

export default GoogleMonth;
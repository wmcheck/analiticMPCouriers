import React from 'react';
import useFetch from "react-fetch-hook";
import { Col, Row } from 'antd';
//import { CheckCircleTwoTone, FireTwoTone, WarningTwoTone, LineChartOutlined } from '@ant-design/icons';
import { DualAxes } from '@ant-design/plots';

const MetricDual = (props) => {
    const { data, line } = props;
    //console.log(data, line);
    // const config = {
    //     data: [data, line],
    //     xField: 'year',
    //     yField: ['value', 'load_time'],
    //     meta: {
    //       load_time: {
    //         range: [0.2, 0.8],
    //       }
    //     },
    //     geometryOptions: [
    //       {
    //         geometry: 'column',   
    //         isStack: true,
    //         isPercent: true,
    //         seriesField: 'country',
    //         color: ['#8fbc8f', '#ffd700', '#ff4500', '#87f4d0'],
    //       },
    //       {
    //         geometry: 'line',        
    //       }
    //     ],
    //     legend: false,        
    //   };

    const config = {
      data: [data, line, line],
      xField: 'year',
      yField: ['value','load_time', 'p95'],
      meta: {
          load_time: {
            range: [0.2, 0.8],
          }
      },
      animation: true,
      geometryOptions: [
          {
            geometry: 'column',   
            isStack: true,
            isPercent: true,
            seriesField: 'country',
            color: ['#8fbc8f', '#ffd700', '#ff4500', '#87f4d0'],
          }
          ,
          {
            geometry: 'line',
            seriesField: 'name',
            smooth: true,
            lineStyle: ({ name }) => {
    
              return {
                opacity: 2.5,
              };
            },
            color: ['#ff4500', '#586bce'],
          }
      ]
        
      };

      return <DualAxes {...config} />;
  };

const MetricPage = (props) => {
    const { data: posts, isLoading, error } = useFetch('/data/pagemetric.json');
    const { ident } = props;
    //console.log('1', window.performance);

    if (!ident) {
        return <div className="error">Error: not ident</div>;
    }
    
    // Show a loading message while data is fetching
    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    
    // Handle error
    if (error) {
        return <div className="error">Error: error fetching</div>;
    }
    
    var version = '';
    var page = '';
    var arr = [];
    //let fcp_ = [];
    let fcp = []; 
    

    for (let key in posts) {
      
      version = posts[key].version;
      arr = posts[key].tab;
      for (let k in arr) {
        if (arr[k].ident === ident) {
          page = arr[k].name;
          //fcp_.push({"type": arr[k].name, "value": arr[k].p75 / 1000})
          let p95 = arr[k].p95 ? arr[k].p95 : null;

          fcp.push({
            "version":version, 
            "good": arr[k].good, 
            "meh": arr[k].meh, 
            "poor": arr[k].poor, 
            "p75": arr[k].p75, 
            "p95": p95
          })    

        }     
      }
    }  

  function MetricItemToData() {
      const res = {};
      const t1 = [];
      const t2 = [];

      var a = [];

      for (let k in fcp) {
        a = fcp;

        t2.push(    {
            year: a[k].version,
            load_time: a[k].p75,
            name: 'p75'
            //p95: a[k].p95
        });
        t2.push(    {
            year: a[k].version,
            load_time: a[k].p95,
            name: 'p95'
        });  

        t1.push(    {
          country: "good",
          year: a[k].version,
          value: a[k].good
        });

        t1.push(    {
          country: "meh",
          year: a[k].version,
          value: a[k].meh
        });

        t1.push(    {
          country: "poor",
          year: a[k].version,
          value: a[k].poor
        });
      }  
      res.data = t1;
      res.line = t2;
    return res;
 }
  
  const mi = MetricItemToData();
  //console.log('result', mi);

  return (
    <>
      <Row >
        <Col span={24} style={{padding: '20px'}}>
          <div style={{ paddingBottom: '20px'}}><b> {page}</b> {ident} <br />
          {/* <span style={{"color":"blue"}}><LineChartOutlined /></span> Среднее время загрузки p75 <CheckCircleTwoTone twoToneColor="darkseagreen" /> - Отлично <WarningTwoTone twoToneColor="gold" /> - Нормально <FireTwoTone twoToneColor="orangered" /> - Плохо  */}
          </div>
          {/* <MetricItem data={mi.data} /> */}
          <MetricDual data={mi.data} line={mi.line} /> 
        </Col>
      </Row> 
    </>
  );
};

export default MetricPage;
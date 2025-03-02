import useFetch from "react-fetch-hook";
import { Col, Row } from 'antd';
import MetricItog from "./MetricItog.js";
import MetricDetailItem from "./MetricDetailItem.js";
import MetricWebVitals from './MetricWebVitals.js';
import CreshRate from './CrashRate.js';
import MetricPage from './MetricPage.js';


const WebVitalsMetric = () => {
  //const { data: posts, isLoading, error } = useFetch('http://localhost:3000/data/metric.json');
  const { data: posts, isLoading, error } = useFetch('/data/metric.json');
  // Show a loading message while data is fetching
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // Handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

  return (
    <>
      {/* <h1>Производительность</h1> */}
      <Row> 
        <Col span={24} style={{padding: '10px'}}>
          <MetricDetailItem metrics={posts}/>
        </Col>  
      </Row>
      <Row> 
        <Col span={24} style={{padding: '10px'}}>
          <MetricWebVitals metrics={posts}/>
        </Col>
      </Row>

      <Row> 
        <Col span={12} style={{padding: '10px'}}>
          <MetricItog data={posts}/>  
        </Col>
        <Col span={12} style={{padding: '10px'}}>
          <CreshRate data={posts}/>
        </Col> 
      </Row>

      <h2>Метрики Web Vitals по страницам и скорость загрузки</h2>
      <Row> 
        <Col span={8} style={{padding: '0px'}}>
          <MetricPage ident="/main/my-tab"/>
        </Col>
        <Col span={8} style={{padding: '0px'}}>
          <MetricPage ident="/main/done-tab"/>
        </Col>
        <Col span={8} style={{padding: '0px'}}>
          <MetricPage ident="/main/prepare-tab"/>
        </Col>
      </Row>
      <Row> 
        <Col span={8} style={{padding: '0px'}}>
          <MetricPage ident="/main/queue-tab"/>
        </Col>
        <Col span={8} style={{padding: '0px'}}>
          <MetricPage ident="/main/profile-tab"/>
        </Col>
        <Col span={8} style={{padding: '0px'}}>
          <MetricPage ident="/order"/>
        </Col>
      </Row>


      <h2>Креши iOS</h2>
      <Row> 
        <Col span={24} style={{padding: '0px'}}>
          <img src="a.png" width="100%" alt="ios"/>
        </Col>
      </Row>
      <h2>Креши Android</h2>
      <Row> 
        <Col span={24} style={{padding: '0px'}}>
        <img src="g.png" width="100%" alt="android"/>
        </Col>
      </Row>

    </>
  );
}

export default WebVitalsMetric;
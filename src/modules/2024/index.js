import React from 'react';
import { Col, Row } from 'antd';

const Itogy2024 = (props) => {
    return (
    <>
        <h1>Итоги 2024 года (с 26 марта)</h1>
      <Row> 

        <Col span={6} style={{padding: '20px'}}>
        <p style={{fontSize:"30px", margin:"10px"}}>Оценка <br/>производительности</p>
              <p><span style={{fontSize:"30px"}}>c</span> <span style={{fontSize:"50px", color: "red"}}>35</span> <span style={{fontSize:"75px"}}>ДО</span> <span style={{fontSize:"100px", color: "gold"}}>87</span></p>
              <p style={{fontSize:"20px", color: "darkseagreen", margin: "0"}}>maximum = <b>92</b></p>
              {/* <Itog /> */}
              <img src="./2024.png" width="100%" alt="2024year"></img>
              <p><span style={{fontSize:"80px", margin:"20px"}}>51</span> <span style={{fontSize:"20px", margin:"0px"}}>релиз</span></p>
        </Col>
        <Col span={16} style={{padding: '10px'}}>
          {/* <Tabs defaultActiveKey="1" items={items} /> */}

          <p style={{fontSize:"30px"}}>iOS <small>крэши 11,7 % от всех устройств</small></p><img src="./ios24.png" width="100%" alt="ios"></img>
          <p style={{fontSize:"30px"}}>Android <small>крэши 4,28 % от всех устройств</small></p><img src="./android24.png" width="100%" alt="android"></img>
        </Col>
      </Row> 
    </>
    );
  };

  export default Itogy2024;
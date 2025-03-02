import React from 'react';
import { Col, Row } from 'antd';
import GoogleGrade from './Google';
import AppleGrade from './Apple';
import RustoreGrade from './Rustore';
import AppGalleryGrade from './Appgallery';
//import GoogleGrade28Day from './Google28day';
import GoogleMonth from './GoogleMonth';
import Review from './review';
const Grade = () => {
    return (
    <>
        <h1>Оценки в сторах</h1>
        
        <Row> 
          <Col span={12} style={{padding: '20px'}}>
            <GoogleGrade />
          </Col>
          <Col span={12} style={{padding: '20px'}}>
            <AppleGrade />
          </Col>
          <Col span={12} style={{padding: '20px'}}>   
            <RustoreGrade />
          </Col>
          <Col span={12} style={{padding: '20px'}}>    
            <AppGalleryGrade />
          </Col>
        </Row> 
        <h2>Динамика оценок в Google Play</h2>
        <Row>    
          <Col span={12} style={{padding: '20px'}}>    
            <GoogleMonth />
            
          </Col>
          <Col span={12} style={{padding: '20px'}}>     
            {/* <GoogleGrade28Day /> */}
          </Col>
        </Row> 

        <Row>
             
          <Col span={8} style={{padding: '20px'}}>    
            <h2>Отзывы Google Play</h2>
            <Review os="android"/>
          </Col>
          <Col span={8} style={{padding: '20px'}}>     
            <h2>Отзывы App store connect</h2>
            <Review os="ios"/>
          </Col>
          <Col span={8} style={{padding: '20px'}}>     
            <h2>Отзывы RuStore</h2>
            <Review os="rustore"/>
          </Col>
        </Row>         
    </>
    );
  };

  export default Grade;
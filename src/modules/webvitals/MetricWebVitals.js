import React from 'react';
import { Col, Row } from 'antd';
import MetricColumn from './MetricColumn';
const MetricWebVitals = (props) => {
    const { metrics } = props;

    let fcp_ = [];
    let lcp_ = [];
    let fid_ = [];
    let cls_ = [];
  
    let fcp = [];
    let lcp = [];
    let fid = [];
    let cls = [];
   
    for (let key in metrics) {
      //console.log('A', key, metrics[key]);
  
      let arr = metrics[key].metric;
      for (let k in arr) {
        if (arr[k].val === "FCP") {
          fcp_.push({"type": metrics[key].version, "value": arr[k].p75 / 1000})
          fcp.push({"version":metrics[key].version, "time": metrics[key].time, "good": arr[k].good, "meh": arr[k].meh, "poor": arr[k].poor, "p": arr[k].p75})
        }
        if (arr[k].val === "LCP") {
          lcp_.push({"type": metrics[key].version, "value": arr[k].p75 / 1000})
          lcp.push({"version":metrics[key].version, "time": metrics[key].time, "good": arr[k].good, "meh": arr[k].meh, "poor": arr[k].poor, "p": arr[k].p75})
        }
        if (arr[k].val === "FID") {
          fid_.push({"type": metrics[key].version, "value": arr[k].p75})
          fid.push({"version":metrics[key].version, "time": metrics[key].time, "good": arr[k].good, "meh": arr[k].meh, "poor": arr[k].poor, "p": arr[k].p75})
        }
        if (arr[k].val === "CLS") {
          cls_.push({"type": metrics[key].version, "value": arr[k].p75 })
          cls.push({"version":metrics[key].version, "time": metrics[key].time, "good": arr[k].good, "meh": arr[k].meh, "poor": arr[k].poor, "p": arr[k].p75})
        }     
      }
    }  

  return (
    <>  
        <h3>Метрики по 75 процентилю</h3>

        <Row>
    <Col span={6} 
      xs={{
        span: 24,
        //offset: 1,
      }}
      lg={{
        span: 6,
        //offset: 2,
      }}
      style={{padding: '20px'}}> 
      <h3>FCP Загрузка</h3>
      <ul>
        <li>Скорость подключения к сети</li>
        <li>Медленный ответа сервера</li>
        <li>Оптимизированный CSS & JS </li>
        <li>Кеширование</li>  
      </ul>
      <MetricColumn data={fcp_} />
      <p>измеряет время с момента начала загрузки страницы до момента отображения какой-либо части содержимого страницы на экране</p>

    </Col>
    <Col span={6} 
      xs={{
        span: 24,
        //offset: 1,
      }}
      lg={{
        span: 6,
        //offset: 2,
      }}
    
    style={{padding: '20px'}}>
      <h3>LCP Отображение</h3>
                <ul>
        <li>Медленный ответа сервера</li>
        <li>Блокировки при рендере CSS & JS </li>
        <li>Медленная загрузка ресурсов</li>
        <li>Рендеринг на клиенте</li>
      </ul>
      <MetricColumn data={lcp_} />
      <p>измеряет время с момента начала загрузки страницы до момента отображения на экране самого большого текстового блока или элемента изображения.</p>

    </Col>

    <Col span={6} 
      xs={{
        span: 24,
        //offset: 1,
      }}
      lg={{
        span: 6,
        //offset: 2,
      }}
    
    style={{padding: '20px'}}> 
      <h3>FID Отзывчивость</h3>
      <ul>
        <li>Медленный ответа сервера</li>
        <li>Длительное исполнение JS</li>
        <li>Размер JS бандла для выполнения</li>
        <li>Рендер блокировки JS</li>
      </ul>
      <MetricColumn data={fid_} />
      <p>измеряет время от момента, когда пользователь впервые взаимодействует со страницей, до момента, когда браузер действительно может начать перехват и обработку событий в ответ на это взаимодействие.</p>
    </Col>
    <Col span={6} 
      xs={{
        span: 24,
        //offset: 1,
      }}
      lg={{
        span: 6,
        //offset: 2,
      }}
    style={{padding: '20px'}}>
      <h3>CLS Визуальная стабильность</h3>
        <ul>
        <li>Картинки без указания размера</li>
        <li>IFame без указания размера</li>
        <li>Динамический отображаемый контент</li>
        <li>Загружаемые шрифты</li>
      </ul>
      <MetricColumn data={cls_} />
      <p>измеряет совокупную оценку всех неожиданных сдвигов макета, которые происходят между началом загрузки страницы и моментом, когда состояние ее жизненного цикла меняется на скрытое.</p>

    </Col>
  </Row> 
 
    </>
    ) 
  };

  export default MetricWebVitals;
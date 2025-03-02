import React from 'react';
import { Col, Row } from 'antd';
import { CheckCircleTwoTone, FireTwoTone, WarningTwoTone } from '@ant-design/icons';
import MetricItem from "./MetricItem.js";

const MetricDetailItem = (props) => {
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
  
  function MetricItemToData() {
      const res = {};
      const t1 = [];
      const t2 = [];
      const t3 = [];
      const t4 = [];
      var a = [];

      for (let k in fcp) {
        a = fcp;
        
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
      res.fcp = t1;
  
      for (let k in lcp) {
        a = lcp;
        
        t2.push({
          country: "good",
          year: a[k].version,
          value: a[k].good
        });
        t2.push({
          country: "meh",
          year: a[k].version,
          value: a[k].meh
        });
        t2.push({
          country: "poor",
          year: a[k].version,
          value: a[k].poor
        });
      }
      res.lcp = t2;
  
      for (let k in fid) {
        a = fid;
        
        t3.push({
          country: "good",
          year: a[k].version,
          value: a[k].good
        });
        t3.push({
          country: "meh",
          year: a[k].version,
          value: a[k].meh
        });
        t3.push({
          country: "poor",
          year: a[k].version,
          value: a[k].poor
        });
      }
      res.fid = t3;
  
      for (let k in cls) {
        a = cls;
        
        t4.push({
          country: "good",
          year: a[k].version,
          value: a[k].good
        });
        t4.push({
          country: "meh",
          year: a[k].version,
          value: a[k].meh
        });
        t4.push({
          country: "poor",
          year: a[k].version,
          value: a[k].poor
        });
      }
      res.cls = t4;
    return res;
 }
  
  const mi = MetricItemToData();
  //console.log('result', mi);

  return (
    <>
      <Row >
        <Col span={12} style={{padding: '20px'}}>
        <div style={{ paddingBottom: '20px'}}><b>FCP Загрузка</b> <CheckCircleTwoTone twoToneColor="darkseagreen" /> - меньше 1 сек <WarningTwoTone twoToneColor="gold" /> - больше 1 сек <FireTwoTone twoToneColor="orangered" /> - больше 3 сек</div>

        <MetricItem data={mi.fcp} />
        </Col>
        <Col span={12} style={{padding: '20px'}}>
          <div style={{ paddingBottom: '20px'}}><b>LCP Отображение</b> <CheckCircleTwoTone twoToneColor="darkseagreen" /> - меньше 2.5 сек <WarningTwoTone twoToneColor="gold" /> - больше 2.5 сек <FireTwoTone twoToneColor="orangered" /> - больше 4 сек</div>

          <MetricItem data={mi.lcp} />
        </Col>
      </Row> 
      <br/><br/>
      <Row >
        <Col span={12} style={{padding: '20px'}}>
          <div style={{ paddingBottom: '20px'}}><b>FID Отзывчивость</b> <CheckCircleTwoTone twoToneColor="darkseagreen" /> - меньше 0.1 сек <WarningTwoTone twoToneColor="gold" /> - больше 0.1 сек <FireTwoTone twoToneColor="orangered" /> - больше 0.3 сек</div>
          <MetricItem data={mi.fid} />
        </Col>
        <Col span={12} style={{padding: '20px'}}>
          <div style={{ paddingBottom: '20px'}}><b>CLS Визуальная стабильность</b> <CheckCircleTwoTone twoToneColor="darkseagreen" /> - меньше 0.01 сек <WarningTwoTone twoToneColor="gold" /> - больше 0.01 сек <FireTwoTone twoToneColor="orangered" /> - больше 0.025 сек</div>

          <MetricItem data={mi.cls} />
        </Col>
      </Row>  
    </>
  );
};

export default MetricDetailItem;
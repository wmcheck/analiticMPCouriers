import React from 'react';
import { Line } from '@ant-design/plots';

function fa(value) {
  return value; //Math.sinh(2 * value) / Math.sinh(2);
};

function calculatePerformanceScore(metrics) {
    const { FCP, LCP, FID, CLS } = metrics;

    // Определите веса для каждой метрики
    const weights = {
        FCP: 0.15, // вес для FCP
        LCP: 0.25, // вес для LCP
        FID: 0.30, // вес для FID
        CLS: 0.30  // вес для CLS
    };

    // Нормализуем значения метрик (чем меньше, тем лучше)
    const normalizedFCP = fa(normalizeFCP(FCP));
    const normalizedLCP = fa(normalizeLCP(LCP));
    const normalizedFID = fa(normalizeFID(FID));
    const normalizedCLS = fa(normalizeCLS(CLS));

    // Вычисляем взвешенную оценку
    const score = (normalizedFCP * weights.FCP) +
                  (normalizedLCP * weights.LCP) +
                  (normalizedFID * weights.FID) +
                  (normalizedCLS * weights.CLS);

    // Приводим оценку к шкале от 0 до 100
    return Math.round(score * 100);
}

// Нормализуем значения метрик (пример)
function normalizeFCP(value) {
    //return fa(value)
    if (value <= 300) return 1; // 0-1s - отлично
    if (value <= 500) return 0.99; // 0-1s - отлично
    if (value <= 600) return 0.98; // 0-1s - отлично
    if (value <= 700) return 0.96; 
    if (value <= 800) return 0.95; 
    if (value <= 900) return 0.94; 
    if (value <= 1000) return 0.93; 
    if (value <= 1200) return 0.9; // 0-1s - отлично
    if (value <= 1500) return 0.8; // 0-1s - отлично
    if (value <= 3000) return 0.5; // 1-2s - приемлемо
    if (value <= 5000) return 0.4; 
    if (value <= 6000) return 0.3; 
    if (value <= 7000) return 0.1; 
    if (value <= 8000) return 0.1; 
    if (value <= 9000) return 0.1; 
    
    return 0.1; // >2s - плохо
}

function normalizeLCP(value) { 
  if (value <= 300) return 1;
  if (value <= 400) return 0.99;
  if (value <= 500) return 0.98;
  if (value <= 700) return 0.97; 
    if (value <= 900) return 0.96; 
    if (value <= 1000) return 0.96; 
    if (value <= 1200) return 0.95; 
    if (value <= 1500) return 0.93; 
    if (value <= 2500) return 0.9; 
    if (value <= 4000) return 0.6; 
    if (value <= 5000) return 0.1; 
    if (value <= 6000) return 0.1; 
    if (value <= 7000) return 0.1; 
    if (value <= 8000) return 0.1; 
    if (value <= 9000) return 0.1; 
    return 0.1; // >4s - плохо
}

function normalizeFID(value) { 
  if (value <= 3) return 1; // 0-100ms - отлично
  if (value <= 4) return 0.97; // 0-100ms - отлично
  if (value <= 5) return 0.93; // 0-100ms - отлично
  if (value <= 6) return 0.92; // 0-100ms - отлично
  if (value <= 7) return 0.89; // 0-100ms - отлично
  if (value <= 8) return 0.88; // 0-100ms - отлично
    if (value <= 10) return 0.85; // 0-100ms - отлично
    if (value <= 12) return 0.82; // 0-100ms - отлично
    if (value <= 13) return 0.71; // 0-100ms - отлично
    if (value <= 15) return 0.65; // 100-300ms - приемлемо
    if (value <= 20) return 0.64; // 100-300ms - приемлемо
    if (value <= 30) return 0.60; // 1-2s - приемлемо
    if (value <= 40) return 0.57; // 1-2s - приемлемо
    if (value <= 50) return 0.53; // 1-2s - приемлемо
    if (value <= 60) return 0.46; // 1-2s - приемлемо
    if (value <= 70) return 0.38; // 1-2s - приемлемо
    if (value <= 80) return 0.37; // 1-2s - приемлемо
    if (value <= 90) return 0.35; // 1-2s - приемлемо
    if (value <= 130) return 0.3; // 1-2s - приемлемо
    if (value <= 150) return 0.3; // 1-2s - приемлемо
    if (value <= 200) return 0.2; // 1-2s - приемлемо
    if (value <= 300) return 0.1; // 1-2s - приемлемо
    return 0.1; // >300ms - плохо
}

function normalizeCLS(value) {
  //return fa(value);  
  if (value <= 0.01) return 1; // 0-0.1 - отлично
  if (value <= 0.09) return 0.9; // 0-0.1 - отлично
    if (value <= 0.1) return 0.88; // 0-0.1 - отлично
    if (value <= 0.2) return 0.85; // 0.1-0.25 - приемлемо
    if (value <= 0.3) return 0.75; // 1-2s - приемлемо
    if (value <= 0.4) return 0.70; // 1-2s - приемлемо
    if (value <= 0.5) return 0.65; // 1-2s - приемлемо
    if (value <= 0.6) return 0.6; // 1-2s - приемлемо
    if (value <= 0.7) return 0.2; // 1-2s - приемлемо
    return 0.1; // >0.25 - плохо
}

const MetricItog = (props) => {
  const { data } = props;
  const a = [];
  const b = [];
  var c = '';
  
  data.forEach(element => {
    //let i = element;
    const m = {};
    element.metric.forEach(el => {
        if (el.val === 'FCP') { m.FCP = el.p75 }
        if (el.val === 'LCP') { m.LCP = el.p75 }
        if (el.val === 'FID') { m.FID = el.p75 }
        if (el.val === 'CLS') { m.CLS = el.p75 }
      }
    )
    
    let performanceScore = calculatePerformanceScore(m);

    element.result = performanceScore;
    a.push(element);
    b.push({ "version": element.version, "time": element.time, "result": performanceScore});
    c = c + '{ "version": "' + element.version + '", "time": "' + element.time + '", "result": ' + performanceScore + '},';
  });
  
  const config = {
    data: a,
    padding: 'auto',
    xField: 'version',
    yField: 'result',
    smooth: true,
    lineStyle: {
      stroke: '#ffd700',
      lineWidth: 3,
      cursor: 'pointer'
    },     
    annotations: [
      {
        type: 'regionFilter',
        start: ['min', '49'],
        end: ['max', '0'],
        color: '#F4664A',
      },
      {
        type: 'regionFilter',
        start: ['min', '90'],
        end: ['max', '100'],
        color: 'darkseagreen',
      }
    ]
  };

  return (
  <>
    <div style={{marginBottom: '10px'}}><b>Оценка производительности Google</b> <br /><b><span style={{color: "orangered"}}>0 .. 49 - плохо</span> <span style={{color: "gold"}}>50 .. 89 - хорошо</span> <span style={{color: "darkseagreen"}}>90 .. 100 - отлично</span></b></div>
    <Line {...config} />
  </>
  );
};

export default MetricItog;
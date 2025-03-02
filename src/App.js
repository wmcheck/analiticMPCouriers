import React from 'react';
import { Layout, Tabs } from 'antd';
import WebVitalsMetric from './modules/webvitals';
import Itogy2024 from './modules/2024';
import Releses from './modules/releses';
import Grade from  './modules/grade';
const { Header, Content } = Layout;

const tab = 
[
  {
    label: <b>Производительность</b>,
    key: 0,
    children: <><WebVitalsMetric/></>
  },
  {
    label: <b>Релизы JS</b>,
    key: 1,
    children: <><Releses/></>
  },

  {
    label: <b>Оценки и отзывы</b>,
    key: 2,
    children: <Grade/>
  },
  {
    label: <b>Итоги 2024 года</b>,
    key: 3,
    children: <Itogy2024 />
  }
];

function App() {
  return (    
    <Layout>
      <Header
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 1,
        width: '100%',

      }}
    >
      <div style={{
        color: 'white',
        fontSize: 'xx-large'
        }}>Метрики МП "Курьеры" <small>28.02.2025</small></div>

      </Header>
      <Content
            style={{
              height: 'calc(100vh - 65px)',
              padding: '0 50px',
                      background: '#fff'
            }}
      >
        <div style={{ height: '100px'}}></div>

        <Tabs
          type="card"
          size="large"
          style={{
            marginBottom: 32,
          }}
          items={tab.map((_, i) => {
            return {
              label: _.label,
              key: _.key,
              children: _.children
            };
          })}
        />

      </Content>
    </Layout>
  );
}

export default App;
import { StarFilled } from '@ant-design/icons';
import { Bar } from '@ant-design/plots';

const AppGalleryGrade = () => {
  const data = [
    {
      type: '★★★★★',
      count: 1,
      delta: "",
    },
    {
      type: '★★★★',
      count: 0,
      delta: "",
    },
    {
      type: '★★★',
      count: 0,
      delta: "",
    },
    {
      type: '★★',
      count: 0,
      delta: "",
    },
    {
      type: '★',
      count: 1,
      delta: "",
    }
  ];
  const config = {
    data,
    xField: 'count',
    yField: 'type',
    legend: {
      position: 'top-left',
    },
    barBackground: {
      style: {
        fill: 'rgba(0,0,0,0.1)',
      },
    },
    interactions: [
      {
        type: 'active-region',
        enable: true,
      },
    ],
  };

  return (
  <>
    <div style={{display: 'flex', gap: '150px', paddingBottom: '30px'}}>
      <div>
        <div style={{marginBottom: '10px'}}>AppGallery</div>
        <img src="appgallery.png" width="20px" alt="appgallery"/>
      </div>  
      <div>
        <div style={{marginBottom: '10px'}}>Средняя оценка</div>
        <h2 style={{margin: '0'}}><StarFilled /> 3</h2><small></small>
      </div>  
      <div>
        <div style={{marginBottom: '10px'}}>Оценок:</div>
        <div><h2 style={{margin: '0'}}> 2</h2> <small></small></div>
      </div>
    </div>  
    <Bar style={{height: '100px'}} {...config} />
    
  </>
  );
};

export default AppGalleryGrade;
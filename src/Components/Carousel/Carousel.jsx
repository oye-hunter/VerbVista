import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>Hello</h3>
    </div>
    <div>
      <h3 style={contentStyle}></h3>
    </div>
    <div>
      <h3 style={contentStyle}>how are</h3>
    </div>
    <div>
      <h3 style={contentStyle}>you doing</h3>
    </div>
  </Carousel>
);
export default App;
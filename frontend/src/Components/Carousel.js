import React from 'react';
import { Carousel } from 'antd';



const imageStyle = {
  width: '100%',
  height: '600px',
  border: '3px solid #ccc', 
  borderRadius: '18px',
  objectFit: 'cover', // Makes image cover the whole area while maintaining aspect ratio
};

const Carousels = () => (
  <Carousel autoplay className='mt-4' >
    <div>
      <img src='https://cdn.mos.cms.futurecdn.net/KUieLwc9pZP7KHHUn8Equk.jpg' style={imageStyle} alt="Slide 1" />
    </div>
    <div>
      <img src='https://c1.staticflickr.com/9/8110/8652376390_7cbfa8e860_b.jpg' style={imageStyle} alt="Slide 2" />
    </div>
    <div>
      <img src='https://9to5mac.com/wp-content/uploads/sites/6/2022/09/use-48mp-iphone-14-pro-camera.jpg?quality=82&strip=all&w=1600' style={imageStyle} alt="Slide 2" />
    </div>
    <div>
      <img src='https://wallpaperaccess.com/full/2589119.jpg' style={imageStyle} alt="Slide 2" />
    </div>
  </Carousel>
);

export default Carousels;

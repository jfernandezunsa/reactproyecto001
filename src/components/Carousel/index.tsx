import React from 'react';
import images from "./../../components/Images";
import { Carousel } from 'nuka-carousel';

const RotativeImg = () => {
  return (
    <Carousel autoplay={true} autoplayInterval={2000} wrapMode="wrap" >
    <img src={images.slider01} />
    <img src={images.slider02} />
    <img src={images.slider03} />
    </Carousel>
  );
};
export default RotativeImg
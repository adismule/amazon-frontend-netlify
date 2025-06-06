import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from './img/Data'; 
import classes from './carousel.module.css';


function CarouselComponent() {
  return (
    <div>
      <ReactCarousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <div key={index}>
            <img key={imageItemLink} src={imageItemLink}/>
          </div>
        ))}
      </ReactCarousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselComponent;

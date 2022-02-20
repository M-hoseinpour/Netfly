import React from 'react';
import Slider from 'react-slick';
import Episode from './Episode';

function EpisodeCarousel({ episodes }) {
    var settings = {
        infinite: false,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        fade:true,
        
      };
      
      return (
            <div className=' w-full'>
              <Slider {...settings}>
                    {episodes?.map((episode, index) => <Episode episode={episode} key={index} /> )}
              </Slider>
            </div>
      )
}

export default EpisodeCarousel;

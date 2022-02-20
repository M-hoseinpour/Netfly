import React from 'react';
import Slider from 'react-slick';
import RecItem from './RecItem';


function RecCarousel({ items }) {
    var settings = {
        infinite: false,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 7,
              initialSlide: 0,
            }
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              initialSlide: 0,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              initialSlide: 0,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 0,
            }
          }
        ]
      };
      
      return (
            <div className=' w-full'>
              <Slider {...settings}>
                    {items && items?.map((item, index) => <RecItem item={item} key={index} /> )}
              </Slider>
            </div>
      )
}

export default RecCarousel;

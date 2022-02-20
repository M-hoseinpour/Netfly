import React from 'react';
import Slider from 'react-slick';
import SeriesRec from './SeriesRec';


function recommendations({ items }) {
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
            }
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
      
      return (
            <div className=' w-full'>
              <Slider {...settings}>
                    {items?.map((item, index) => <SeriesRec item={item} key={index} /> )}
              </Slider>
            </div>
      )
}

export default recommendations;

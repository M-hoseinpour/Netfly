import React from 'react';
import Slider from 'react-slick';
import CastItem from './CastItem';


function CastCarousel({ items, cast }) {
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
      // Gather Unique Element Id's based on which you want to filter the elements.
      const uniqIds = items.reduce((ids, el) => ids.add(el.id), new Set());
      // Filter out uniq elements.
      const uniqElements = items.filter((el) => uniqIds.delete(el.id));

      
      return (
            <div className=' w-full'>
              <Slider {...settings}>
                    {uniqElements?.map((item, index) => <CastItem item={item} cast={cast && cast} key={index} /> )}
              </Slider>
            </div>
      )
}

export default CastCarousel;

import React from 'react';
import Slider from 'react-slick';
import PictureItem from './Images/PictureItem';

function MovieCarousel({ items }) {
    var settings = {
        infinite: false,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
      return (
            <div className=' w-full'>
              <Slider {...settings}>
                    {items.backdrops.slice(1)?.map((item, index) => <PictureItem url={item.file_path} key={index}/>)}
              </Slider>
            </div>
      )
}

export default MovieCarousel;

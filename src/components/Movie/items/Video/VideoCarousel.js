import React from 'react';
import Slider from 'react-slick';
import VideoItem from './VideoItem';


function VideoCarousel({ items, cast }) {
    var settings = {
        infinite: false,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow:2,
              slidesToScroll: 2,
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
            <div className='h-full w-full'>
              <Slider {...settings}>
                    {items?.map((item, index) => <VideoItem item={item} key={item.id} /> )}
              </Slider>
            </div>
      )
}

export default VideoCarousel;

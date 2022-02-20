import React from "react";
import Slider from "react-slick";
import ImageItem from "./ImageItem";

function ImagesCarousel({ items }) {
  var settings = {
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 9,
    slidesToScroll: 9,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return items ? (
    <div className="w-full">
      <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
        <div className="w-1 h-8 rounded-lg bg-yellow"></div>
        <h1>Images</h1>
      </div>
      <Slider {...settings}>
        {items?.map((item, index) => (
          <ImageItem item={item} key={index} />
        ))}
      </Slider>
    </div> 
  ) : null ;
}

export default ImagesCarousel;

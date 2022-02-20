import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { settings_carousel } from "../shared/Constants/Contants";
import CarouselDetails from "./CarouselDetails";
import CarouselItem from "./CarouselItem";
import More from './More'
import { ReactComponent as MoreButton } from "../shared/icons/more.svg";

export default function HomeCarousel({ items, Heading, link }) {
  const [itemDetail, setitemDetail] = useState("");
  const [itemDetailShow, setitemDetailShow] = useState(false);
  const [LoadedDetails, setLoadedDetails] = useState(false);
  const DetailDiv = useRef();
  
  return (
    items && (
      <div className=" my-5">
        <div className="flex justify-between items-end text-white_">
          <h1 className=" text-2xl m-2">{Heading}</h1>
          <Link className="p-1 flex items-center hover:underline text-sm" to={link}><span className="mr-1">More</span> <MoreButton /></Link>
        </div>
        <Slider {...settings_carousel}>
          {items &&
            items.map((item, index) => (
              <CarouselItem
                key={index}
                item={item}
                setLoadedDetails={setLoadedDetails}
                setitemDetail={setitemDetail}
                setitemDetailShow={setitemDetailShow}
                itemDetail={itemDetail}
                itemDetailShow={itemDetailShow}
                DetailDiv={DetailDiv}
              />
            ))}
            { items && <More link={link} /> }
        </Slider>
        <CarouselDetails
          itemDetail={itemDetail}
          LoadedDetails={LoadedDetails}
          setLoadedDetails={setLoadedDetails}
          itemDetailShow={itemDetailShow}
          DetailDiv={DetailDiv}
        />
      </div>
    )
  );
}

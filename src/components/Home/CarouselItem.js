import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";
import { handleRecentlyWatched } from "../shared/RecentlyWatched";

function CarouselItem({
  item,
  setitemDetail,
  setitemDetailShow,
  itemDetail,
  setLoadedDetails,
  itemDetailShow,
  DetailDiv,
}) {

  const navigate = useNavigate()
  const handleDetail = () => {
    if (item.id === itemDetail.id) {
      window.innerWidth > 850 && setitemDetailShow((prev) => !prev);
    } else {
      window.innerWidth > 850 && setitemDetailShow(true);
      setLoadedDetails(false);
    }
    if(window.innerWidth < 850)  {item.first_air_date ?navigate(`series/${item.id}`) : navigate(`movie/${item.id}`); handleRecentlyWatched(item)} 
    setitemDetail(item);
  };

  useEffect(() => {
    if (itemDetailShow && item.id === itemDetail.id) {
      DetailDiv.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [itemDetailShow, DetailDiv, item, itemDetail]);

  return (
    item && (
        <div
          onClick={() => handleDetail()}
          className={`sm:h-64 h-56 mx-2 rounded overflow-hidden hover:cursor-pointer hover:opacity-80 transition duration-3000  ${
            item.id === itemDetail.id && itemDetailShow ? "mt-5" : "m-0"
          }`}
        >
          <div className="h-5/6 w-full rounded skeleton relative">
            <LazyLoad>
              <img
                alt=""
                className="w-full h-full rounded user-none"
                src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}
              />
            </LazyLoad>
          </div>
          <h1 className="text-white text-xs text-ellipsis overflow-hidden pt-1 px-0.5">
            {item.original_title || item.original_name || item.name}
          </h1>
          {item.id === itemDetail.id && itemDetailShow && (
            <div className="w-1/2 h-1 bg-white_ mt-3 rounded mx-10"></div>
          )}
        </div>
    )
  );
}

export default CarouselItem;

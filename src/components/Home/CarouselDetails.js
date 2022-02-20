import React, { useEffect, useState } from "react";
import { Genres_list } from "../shared/Constants/Contants";
import { ReactComponent as Heart } from "../shared/icons/heart.svg";
import { ReactComponent as Play } from "../shared/icons/play.svg";
import { ReactComponent as Cross } from "../shared/icons/cross.svg";
import { ReactComponent as Add } from "../shared/icons/add.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { handleRecentlyWatched } from "../shared/RecentlyWatched";

function CarouselDetails({ setLoadedDetails, LoadedDetails, itemDetail, itemDetailShow, DetailDiv,}) {
  
  // finding genres of the movie
  const handleGenre = (genre) => {
    const item = Object.keys(Genres_list).find((gen) => +gen === genre);
    if (Genres_list[item]) {
      return Genres_list[item];
    }
  };

  // handling watch later in local storage
  const [added, setAdded] = useState(false)
  useEffect(() => setAdded(JSON.parse(localStorage.getItem("WatchLater"))?.some(Watch  => Watch.id === itemDetail.id)), [itemDetailShow, itemDetail.id])
  const handleWatchLater = () => {
    let WatchLater = JSON.parse(localStorage.getItem("WatchLater"));
    if(WatchLater == null) WatchLater = [];
    if(!WatchLater.some((Watch) => Watch.id === itemDetail.id)) {WatchLater.push(itemDetail); setAdded(true); toast.success("added to watch Later", { style:{background: "#333", color:'#fff'}, duration:1000})
    } else { WatchLater = WatchLater.filter(item => item.id !== itemDetail.id ) ; setAdded(false); toast.error("Deleted from watch Later", { style:{background: "#333", color:'#fff'}, duration:1000}) }
    localStorage.setItem('WatchLater', JSON.stringify(WatchLater));
  }

  return (
    <div
      className={`bg-black_ transition relative duration-1000 ${!LoadedDetails && "skeleton"}`}
    >
      <div className="absolute bottom-0" ref={DetailDiv}></div>
      {itemDetailShow && (
        <div className="mt-5 ml-64 backdrop-home">
          <img
            onLoad={() => setLoadedDetails(true)}
            style={{ display: LoadedDetails ? "block" : "none" }}
            id="carousel-image"
            className="object-fill backdrop-home-img h-full w-full"
            src={`https://image.tmdb.org/t/p/original/${itemDetail.backdrop_path}`}
            alt=""
          />
        </div>
      )}
      {itemDetailShow && (
        <div className=" text-white_ absolute top-1/2 transform w-1/3 -translate-y-1/2 ml-5 ">
          <h1 className="text-2xl">
            {itemDetail.original_title || itemDetail.original_name || itemDetail.name}
          </h1>
          <div className="flex flex-column space-x-5 text-sm mt-5">
            {itemDetail.original_language && (
              <p className="whitespace-nowrap ">
                Language : {itemDetail.original_language}
              </p>
            )}
            {itemDetail.release_date && (
              <p className="whitespace-nowrap ">
                Release Date : {itemDetail.release_date}
              </p>
            )}
            {itemDetail.vote_average && (
              <p className="whitespace-nowrap flex">
                <Heart />
                <span className="ml-1">{itemDetail.vote_average * 10}%</span>
              </p>
            )}
          </div>
          <div className="w-full flex flex-col relative h-20">
            <p className="mt-5 text-sm overflow-hidden">
              {itemDetail.overview}
            </p>
            {itemDetail.overview.length > 150 && <p className="">...</p>}
          </div>

          {itemDetail.genre_ids && (
            <ul className="flex space-x-2 my-2 text-sm text-whitish">
              <span>Catgories: </span>{" "}
              {itemDetail?.genre_ids?.map((genre, index) => (
                <li className="whitespace-nowrap" key={index}>
                  {handleGenre(genre)} {handleGenre(genre) && ","}
                </li>
              ))}
            </ul>
          )}
          <div className="flex lg:text-lg text-sm  justify-evenly mt-10">
            <Link to={itemDetail.first_air_date ? `Series/${itemDetail.id}` : `Movie/${itemDetail.id}`}>
            <button onClick={() => handleRecentlyWatched(itemDetail)} className="rounded p-2 bg-glass items-center flex hover:text-white">
            <Play />
              <span className="whitespace-nowrap ml-1">Watch Now</span>
            </button>
            </Link>
            <button onClick={() => handleWatchLater()} className="rounded p-2 bg-glass flex items-center hover:text-white">
              {!added ? <Add /> : <Cross />}
              <span className="mx-2 whitespace-nowrap">{!added ? "Add to watch later" : "Delete from watch later"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselDetails;

import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import ShowMoreText from "react-show-more-text";
import EpisodeCarousel from "./Episode/EpisodeCarousel";

function SeasonDetails({ Season }) {
  const [LoadedPoster, setLoadedPoster] = useState(false);
  useEffect(() => setLoadedPoster(false), [Season.id]);
  return (
    <>
    <div className="flex sm:flex-row flex-col my-5">
      <div className="sm:h-80 sm:w-72 h-96 w-full rounded skeleton flex justify-center relative">
        <LazyLoad>
          <img
            alt=""
            className="w-full h-full rounded user-none"
            onLoad={() => setLoadedPoster(true)}
            style={{ display: LoadedPoster ? "inline" : "none" }}
            src={`https://image.tmdb.org/t/p/w400/${Season.poster_path}`}
          />
        </LazyLoad>
      </div>
      <div className="mx-2 flex text-white_ flex-col sm:w-2/3 mt-5">
        <h1 className="text-2xl">{Season.name}</h1>
        {Season.air_date && <p>Air Date : {Season.air_date}</p>}
        {Season.episode_count && <p>{Season.episode_count}</p> }
        {Season.overview &&<ShowMoreText
          lines={6}
          more="&#9660; Show more"
          less="&#9650; Show less"
          className="text-white_ mb-8"
          anchorClass="text-darkcyan block text-center hover:text-blue"
        >
          OverView : {Season.overview}
        </ShowMoreText>}
      </div>
    </div>
    {
      Season && <EpisodeCarousel  episodes={Season.episodes} />
    }
    
    </>
  );
}

export default SeasonDetails;

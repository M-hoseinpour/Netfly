import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

function Episode({ episode }) {
    const [Loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(false), [episode.id]);
  return (
    <>
      <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
        <div className="w-1 h-8 rounded-lg bg-yellow"></div>
        <h1>Episodes</h1>
      </div>
      <div
        className={` backdrop-episode h-96 w-full ${
          !Loaded && "skeleton-wave"
        } rounded sm:p-5 flex justify-center relative`}
      >
        <LazyLoad>
          <img
            alt=""
            className="w-full h-full rounded user-none"
            onLoad={() => setLoaded(true)}
            style={{ display: Loaded ? "inline" : "none" }}
            src={`https://image.tmdb.org/t/p/original/${episode.still_path}`}
          />
        </LazyLoad>
        <div className="absolute bottom-12 left-12">
          <h1 className="text-white_ text-2xl">{episode.name}</h1>
          <div className="mt-2 flex flex-col">
            <span className="text-white_ text-darkcyan -mb-1 text-sm">
              Season {episode.season_number}
            </span>
            <p className="text-white_">Episode {episode.episode_number}</p>
          </div>
        </div>
      </div>
      <div className="text-white_ p-5 -mt-5 z-10">
        Overview : {episode.overview}
      </div>
    </>
  );
}

export default Episode;

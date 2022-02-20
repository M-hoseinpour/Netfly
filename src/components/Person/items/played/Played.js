import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { handleRecentlyWatched } from "../../../shared/RecentlyWatched";

function Played({ movie }) {
  return (
    <Link to={ movie.episode_count ? `/series/${movie.id}` : `/movie/${movie.id}`}>
    <div onClick={() => handleRecentlyWatched(movie) } className="flex flex-col items-center overflow-hidden my-5 sm:mx-2 mx-1">
      <div
        className={`sm:h-64 sm:w-48 h-48 w-28 rounded ${
          movie.poster_path ? "skeleton" : "movieBackground"
        } relative`}
      >
        <LazyLoad>
          {
                movie.poster_path &&
            <img
              alt=""
              className="w-full h-full rounded user-none"
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            />
          }
        </LazyLoad>
      </div>
      <h1 className="w-24 sm:w-48 text-xs sm:text-md text-white_ flex justify-center">
        {movie.original_title || movie.original_name}
      </h1>
    </div>
    </Link>
  );
}

export default Played;

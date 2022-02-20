import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

function SearchItem({ Person, inputSearch }) {
  const[Loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(false), [inputSearch])
  return  (
    <Link to={`/Person/${Person.id}`}>
    <div className="flex flex-col items-center overflow-hidden my-5 sm:mx-4 mx-2">
      <div
        className={`sm:h-64 sm:w-48 h-32 w-28 rounded ${
          Person.profile_path ? "skeleton" : "profile-background"
        } relative bg-center bg-repeat-norepeat bg-cover`}
      >
        <LazyLoad>
          {
                Person.profile_path &&
            <img
              alt=""
              className="w-full h-full rounded user-none"
                onLoad={() => setLoaded(true)}
                style={{ display: Loaded ? "inline" : "none" }}
              src={`https://image.tmdb.org/t/p/w400/${Person.profile_path}`}
            />
          }
        </LazyLoad>
      </div>
      <h1 className="w-24 sm:w-48 text-xs sm:text-md text-white_ flex justify-center">
        {Person.name}
      </h1>
    </div>
    </Link>
  );
}

export default SearchItem;

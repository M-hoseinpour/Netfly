import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

function Star({ star }) {
  const [loaded, setloaded] = useState(false);

  return (
    <div className="px-2 w-full">
      <Link to={`Person/${star.id}`}>
        <div className={`h-64  w-full skeleton rounded bg-center bg-no-repeat relative`} >
          <LazyLoad>
            <img
              alt=" "
              onLoad={() => setloaded(true)}
              style={{ display: loaded ? "inline" : "none" }}
              className={`w-full h-full rounded user-none `}
              src={`https://image.tmdb.org/t/p/w500/${star.profile_path}`}
            />
          </LazyLoad>
        </div>
      </Link>
      <div className="w-full h-12 flex justify-center">
        <h1 className="text-white_ text-center mt-1">{star.name}</h1>
      </div>
    </div>
  );
}

export default Star;

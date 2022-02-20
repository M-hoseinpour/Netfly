import React, { useContext, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { handleRecentlyWatched } from "../../../shared/RecentlyWatched";
import { SeriesContext } from "../../Series_state/SeriesState";

function SeriesRec({ item }) {
  const [loaded, setloaded] = useState(false);
  useEffect(() => setloaded(false), [item.id]);
  const { dispatch } = useContext(SeriesContext);
  return (
    <>
      <Link to={item.first_air_date ? `/Series/${item.id}` : `/movie/${item.id}`}>
        <div
          className={`h-64 mx-2 skeleton  rounded bg-center bg-no-repeat relative`}
          onClick={() => {
            dispatch({ type: "SET_LOADER", payload: false });
            dispatch({ type: "SET_LOADER_BACKDROP", payload: false });
            handleRecentlyWatched(item)
          }}
        >
          <LazyLoad>
            {item.poster_path && (
              <img
                alt=" "
                onLoad={() => setloaded(true)}
                style={{ display: loaded ? "inline" : "none" }}
                className={`w-full h-full rounded user-none `}
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
            )}
          </LazyLoad>
        </div>
      </Link>

      {(item.title || item.original_title) && (
        <div className="w-full h-12  mx-2">
          <h1 className="text-white_ text-center mt-1">
            {item.title || item.original_title}
          </h1>
        </div>
      )}
    </>
  );
}

export default SeriesRec;

import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

function CastItem({ item, cast }) {
  const [loaded, setloaded] = useState(false);
  useEffect(() => setloaded(false), [item.profile_path]);
  return (
    // <Link className={item.adult === true ? "cursor-not-allowed" : ''} to={item.adult === false ? `/Person/${item.id}` : ''}>
    <Link to={`/Person/${item.id}`}>
      <div
        className={`h-64 mx-2 ${
          item.profile_path ? "skeleton" : "castBackground"
        } rounded bg-center bg-no-repeat relative`}
      >
        <LazyLoad>
          {item.profile_path && (
            <img
              alt=" "
              onLoad={() => setloaded(true)}
              style={{ display: loaded ? "inline" : "none" }}
              className={`w-full h-full rounded user-none `}
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            />
          )}
        </LazyLoad>
      </div>

      {(item.name || item.original_name) && (
        <div className="w-full h-14  mx-2">
          {!cast && (
            <h1 className="text-darkcyan text-center mt-2">
              {item.known_for_department}:
            </h1>
          )}
          <h1 className="text-white_ text-center mt-1">
            {item.name || item.original_name}
          </h1>
        </div>
      )}
    </Link>
  );
}

export default CastItem;

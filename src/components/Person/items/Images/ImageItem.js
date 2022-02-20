import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

function ImageItem({ item }) {
  const [loaded, setloaded] = useState(false);
  useEffect(() => setloaded(false), [item.profile_path]);
  return (
    <div
      className={`h-64 mx-2 ${
        item.file_path ? "skeleton" : "castBackground"
      } rounded bg-center bg-no-repeat relative`}
    >
      <LazyLoad>
        {item.file_path && (
          <img
            alt=" "
            onLoad={() => setloaded(true)}
            style={{ display: loaded ? "inline" : "none" }}
            className={`w-full h-full rounded user-none `}
            src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}
          />
        )}
      </LazyLoad>
    </div>
  );
}

export default ImageItem;

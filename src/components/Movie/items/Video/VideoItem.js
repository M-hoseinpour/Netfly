import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

function VideoItem({ item }) {
  const [loaded, setloaded] = useState(false);
  useEffect(() => setloaded(false), [item.key]);
  return (
    <>
      <div
        className={`mx-2 ${
          item.id ? "skeleton" : "castBackground"
        } overflow-hidden video-responsive rounded bg-center bg-no-repeat relative`}
      >
        <LazyLoad>
          {item.id && (
            <iframe
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              width="450"
              height="200"
              title={item.name}
              onLoad={() => setloaded(true)}
              style={{ display: loaded ? "inline" : "none" }}
              src={`https://www.youtube.com/embed/${item.key}`}
            ></iframe>
          )}
        </LazyLoad>
      </div>

      {(item.name || item.original_name) && (
        <div className="w-full h-16 mx-2">
          <h1 className="text-white_ text-center mt-1">
            {item.name || item.original_name}
          </h1>
        </div>
      )}
    </>
  );
}

export default VideoItem;

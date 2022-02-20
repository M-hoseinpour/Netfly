import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

function PictureItem({ url }) {
  
  const [loaded, setloaded] = useState(false)
  useEffect(() => setloaded(false),[url])

  return (
    <div className={`h-64  mx-2 rounded skeleton relative`}>
      <LazyLoad>
        <img
          alt=""
          onLoad={() => setloaded(true)}
          style={{"display" : loaded ? "inline" : "none" }}
          className={`w-full h-full rounded user-none `}
          src={`https://image.tmdb.org/t/p/w500/${url}`}
        />
      </LazyLoad>
    </div>
  );
}

export default PictureItem;

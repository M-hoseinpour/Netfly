import React from "react";

function MovieDetail({ name, item }) {
  return (
    <div className="flex mt-2">
      <span className="h-8 mx-1 my-0.5 bg-chocolate w-0.5 rounded-lg"></span>
      <div className="">
        <div className="text-xs text-glass_">{name}:</div>
        <h1 className="text-white_">{item ? item : "-"}</h1>
      </div>
    </div>
  );
}

export default MovieDetail;

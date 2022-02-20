import React from "react";

function DetailPerson({ item, title }) {
  return (
    <div className="flex">
      <span className="h-10 mx-1 my-0.5 bg-chocolate w-0.5 rounded-lg"></span>
      <div className="">
        <div className="text-sm text-glass_">{title}</div>
        <h1 className="text-white_ text-lg">{item}</h1>
      </div>
    </div>
  );
}

export default DetailPerson;

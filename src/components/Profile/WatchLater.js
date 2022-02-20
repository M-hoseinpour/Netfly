import React, { useEffect, useState } from "react";
import WatchLaterItem from "./WatchLaterItem";

function WatchLater() {
  let WatchLaterList = JSON.parse(localStorage.getItem("WatchLater"))
  const [changed, setchanged]  = useState(false)
  useEffect(() => {
    WatchLaterList = JSON.parse(localStorage.getItem("WatchLater"))
  }, [JSON.parse(localStorage.getItem("WatchLater"))], changed)
  return (
    <div className="mt-8 mx-2 md:mx-24 text-white_">
      <h1 className="text-2xl my-">Watch Later</h1>
      <div className="flex flex-wrap">
        {WatchLaterList &&
          WatchLaterList.map((watch) => (
            <WatchLaterItem key={watch.id} movie={watch} setchanged={setchanged} />
          ))}
      </div>
    </div>
  );
}

export default WatchLater;

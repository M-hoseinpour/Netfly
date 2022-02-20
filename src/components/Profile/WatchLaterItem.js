import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ReactComponent as Bookmark } from "../shared/icons/bookmark.svg";
import { ReactComponent as BookmarkFill } from "../shared/icons/bookmarkfill.svg";

function WatchLaterItem({movie, setchanged}) {
  const[Loaded, setLoaded] = useState(false)
  const [added, setAdded] = useState(JSON.parse(localStorage.getItem("WatchLater"))?.some(Watch  => Watch.id === movie.id));
  const handleWatchLater = () => {
    let WatchLater = JSON.parse(localStorage.getItem("WatchLater"));
    if(WatchLater == null) WatchLater = [];
    if(!WatchLater.some((Watch) => Watch.id === movie.id)) {WatchLater.push(movie); setAdded(true); toast.success("added to watch Later", { style:{background: "#333", color:'#fff'}, duration:1000})
    } else { WatchLater = WatchLater.filter(item => item.id !== movie.id ) ; setAdded(false); toast.error("Deleted from watch Later", { style:{background: "#333", color:'#fff'}, duration:1000}) }
    localStorage.setItem('WatchLater', JSON.stringify(WatchLater));
  }
  return (
      <div className="flex flex-col items-center overflow-hidden my-5 sm:mx-4 mx-2">
      <div
        className={`sm:h-64 sm:w-48 h-38 w-28 rounded ${
            movie.poster_path ? "skeleton" : "movieBackground"
        } relative`}
      >
            <Link to={ movie.first_air_date ? `/series/${movie.id}` : `/movie/${movie.id}`}>
          {
                movie.poster_path &&
            <img
              alt=""
              className="w-full h-full rounded user-none"
              onLoad={() => setLoaded(true)}
              style={{ display: Loaded ? "inline" : "none" }}
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            />
          }
    </Link>
          <button onClick={() => {handleWatchLater(); setchanged(prev => !prev)}} className="absolute -top-0.5 right-0" >
            { added ? <BookmarkFill /> : <Bookmark />}
            </button>
      </div>
      <h1 className="w-24 sm:w-48 text-xs sm:text-md text-white_ flex justify-center">
        {movie.original_title || movie.original_name}
      </h1>
    </div>
  );
}

export default WatchLaterItem;

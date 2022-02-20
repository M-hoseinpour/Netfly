import React, { useContext, useState } from "react";
import LazyLoad from "react-lazyload";
import MovieDetail from "../../shared/Movie/MovieDetail";
import { MovieContext } from "../movie_state/MovieState";
import { ReactComponent as Bookmark } from "../../shared/icons/bookmark.svg";
import { ReactComponent as BookmarkFill } from "../../shared/icons/bookmarkfill.svg";
import toast from "react-hot-toast";
import { convertMinsToHrsMins } from "../../shared/Movie/RunTime";


function DetailMovie({ movie, Details, Credits }) {
  const { dispatch, Loaded } = useContext(MovieContext);

  // handling watch later in local storage
  const [added, setAdded] = useState(JSON.parse(localStorage.getItem("WatchLater"))?.some(Watch  => Watch.id === movie.id));
  const handleWatchLater = () => {
    let WatchLater = JSON.parse(localStorage.getItem("WatchLater"));
    if(WatchLater == null) WatchLater = [];
    if(!WatchLater.some((Watch) => Watch.id === movie.id)) {WatchLater.push(movie); setAdded(true); toast.success("added to watch Later", { style:{background: "#333", color:'#fff'}, duration:1000})
    } else { WatchLater = WatchLater.filter(item => item.id !== movie.id ) ; setAdded(false); toast.error("Deleted from watch Later", { style:{background: "#333", color:'#fff'}, duration:1000}) }
    localStorage.setItem('WatchLater', JSON.stringify(WatchLater));
  }
    return (
    <div className="flex flex-col md:flex-row items-center p-2 pt-5 md:p-5 w-full relative">
      <div className="md:h-80 md:w-72 h-96 w-72 rounded skeleton relative">
        <LazyLoad>
          <img
            alt=""
            className="w-full h-full rounded user-none"
            onLoad={() => dispatch({type: "SET_LOADER", payload : true})}
            style={{"display" : Loaded ? "inline" : "none" }}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </LazyLoad>
      </div>
      <div className="sm:m-5 mt-10 w-full">
        {/* title */}
        <h1 className="text-white_ text-2xl mx-2">
          {movie.original_title || movie.original_name || movie.name}
        </h1>

        {/* first row */}
        <div className="flex sm:space-x-10 items-center justify-between space-x-2 flex-wrap">
          <MovieDetail name="Release Date" item={movie.release_date} />
          <MovieDetail name="Run Time" item={movie.runtime ? convertMinsToHrsMins(movie.runtime) : '-'} />
          <MovieDetail name="Status" item={movie.status} />
          <MovieDetail name="Language" item={movie.original_language} />
        </div>

        {/* second row */}
        <div className="flex sm:flex-row flex-col  w-full">
          <div className="sm:w-1/2">
            <div className="bg-yellow mt-5 rounded-l w-20 clip-detail text-black_ text-center">
              <span className="font-bold ">voting :</span>
            </div>
            <div className="flex flex-wrap space-x-5 justify-start">
              <MovieDetail
                name="User Score"
                item={movie.vote_average * 10 + "%"}
              />
              <MovieDetail name="Vote Count" item={movie.vote_count} />
              {Details.theMovieDb && (
                <MovieDetail name="IMDB" item={Details.theMovieDb} />
              )}
              {Details.rottenTomatoes && (
                <MovieDetail
                  name="RottenTomatoes"
                  item={Details.rottenTomatoes}
                />
              )}
            </div>
          </div>
          <div className="sm:w-1/2 ">
            <div className="bg-yellow mt-5 rounded-l w-20 clip-detail text-black_ text-center">
              <span className="font-bold ">Credits :</span>
            </div>
            <div className="flex space-x-10 text-xs justify-start">
              <MovieDetail
                name="Cast"
                item={
                  Credits &&
                  Credits.cast.slice(0, 4).map((c) => " " + c.name) + "..."
                }
              />
            </div>
          </div>
        </div>

        {/* third row */}
        <div className="flex sm:flex-row flex-col w-full">
          <div className="sm:w-1/2">
            <div className="bg-yellow mt-5 rounded-l w-32 clip-detail text-black_ text-center">
              <span className="font-bold">Box office :</span>
            </div>
            <div className="flex sm:space-x-10 space-x-20 justify-start ">
              <MovieDetail
                name="Budget"
                item={movie.budget === 0 ? "-" : '$' + movie.budget.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              />
              <MovieDetail
                name="Revenue"
                item={movie.revenue === 0 ? "-" : '$' + movie.revenue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              />
            </div>
          </div>
          <div className="sm:w-1/2">
            <div className="bg-yellow mt-5 rounded-l w-32 clip-detail text-black_ text-center">
              <span className="font-bold ">Production :</span>
            </div>
            <div className="text-xs text-white_ items-center justify-start">
              <MovieDetail
                name="companies"
                item={movie.production_companies.map((c) => c.name + ", ")}
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleWatchLater} className="absolute -top-0.5 right-0" >
      { added ? <BookmarkFill /> : <Bookmark />}
      </button>
    </div>
  );
}

export default DetailMovie;

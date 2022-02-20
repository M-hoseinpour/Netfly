import React, { useContext } from "react";
import LazyLoad from "react-lazyload";
import MovieDetail from "../../shared/Movie/MovieDetail";
import { SeriesContext } from "../Series_state/SeriesState";


function SeriesDetail({ Series, Details, Credits }) {
  const { dispatch, Loaded } = useContext(SeriesContext);
  return (
    <div className="flex flex-col md:flex-row items-center p-2 pt-5 md:p-5 w-full">
      <div className="md:h-80 md:w-72 h-96 w-72 rounded skeleton relative">
        <LazyLoad>
          <img
            alt=""
            className="w-full h-full rounded user-none"
            onLoad={() => dispatch({type: "SET_LOADER", payload : true})}
            style={{"display" : Loaded ? "inline" : "none" }}
            src={`https://image.tmdb.org/t/p/w500/${Series.poster_path}`}
          />
          
        </LazyLoad>
      </div>
      <div className="sm:m-5 mt-10 w-full">
        {/* title */}
        <h1 className="text-white_ text-2xl mx-2">
          {Series.original_title || Series.original_name || Series.name}
        </h1>

        {/* first row */}
        <div className="flex sm:space-x-10 items-center justify-between space-x-2 flex-wrap">
          <MovieDetail name="First air" item={Series.first_air_date === 0 ? "-" : Series.first_air_date}/>
          <MovieDetail name="Last air" item={Series.last_air_date === 0 ? "-" : Series.last_air_date}/>
          <MovieDetail name="Status" item={Series.status} />
          <MovieDetail name="Language" item={Series.original_language} />
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
                item={Series.vote_average * 10 + "%"}
              />
              <MovieDetail name="Vote Count" item={Series.vote_count} />
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
            <div className="bg-yellow mt-5 rounded-l w-52 clip-detail text-black_ text-center">
              <span className="font-bold">Seasons and episodes:</span>
            </div>
            <div className="flex flex-wrap text-sm items-start sm:space-x-3 text-sm space-x-2 justify-start ">
              <MovieDetail
                name="Seasons"
                item={Series.budget === 0 ? "-" : Series.number_of_seasons}
              />
              <MovieDetail
                name="Total episodes"
                item={Series.revenue === 0 ? "-" : Series.number_of_episodes}
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
                item={Series.production_companies.map((c) => c.name + ", ")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeriesDetail;

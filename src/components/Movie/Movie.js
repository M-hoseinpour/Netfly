import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../shared/Loading";
import CastCarousel from "./items/Cast/CastCarousel";
import MovieCarousel from "./items/MovieCarousel";
import VideoCarousel from "./items/Video/VideoCarousel";
import ExtraDetails from "./items/Reviews/ExtraDetails";
import Collection from "./items/Collection/Collection";
import { MovieContext } from "./movie_state/MovieState";
import RecCarousel from "./items/recommendations/RecCarousel";
import Reviews from "./items/Reviews/Reviews";
import DetailMovie from "./items/DetailMovie";
import NotFound from "../shared/NotFound/NotFound";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [Details, setDetails] = useState("");
  const [Credits, setCredits] = useState("");
  const [Pictures, setPictures] = useState("");
  const [Videos, setVideos] = useState("");
  const [KeyWords, setKeyWords] = useState("");
  const [Error, setError] = useState("");
  const [recommendations, setrecommendations] = useState("");
  const [reviews, setreviews] = useState("");
  const { FetcherMovie, Fetcher, dispatch, backdrop_loaded } = useContext(MovieContext);

  useEffect(() => {
    FetcherMovie(setMovie, setError, `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    FetcherMovie(setDetails, setError, `https://imdb-api.com/en/API/Ratings/${process.env.REACT_APP_IMDB_KEY}/${movie.imdb_id}`)
    Fetcher(setCredits,  `movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    Fetcher(setVideos, `/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    Fetcher(setPictures, `movie/${id}/images?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_image_language=en,null`);
    Fetcher(setKeyWords,`movie/${id}/keywords?api_key=${process.env.REACT_APP_API_KEY}`);
    Fetcher(setrecommendations,`movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`);
    Fetcher(setreviews,`movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`);
  }, [FetcherMovie , Fetcher, id , movie.imdb_id, Error]);

  return (
    (movie && !Error) ? (
      <> 
      <div className={`text-white_ relative ${movie.backdrop_path ? 'backdrop-movie' : 'h-64'} ${ (movie.backdrop_path && !backdrop_loaded) && 'skeleton-wave'} w-full -z-10 hidden sm:block`}>
        {movie.backdrop_path && <img 
            alt=''
            className="h-full w-full"
            onLoad={() => dispatch({type: "SET_LOADER_BACKDROP", payload : true})}
            style={{"display" : backdrop_loaded ? "inline" : "none" }}
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} /> }
      </div> 
      
        <div className="w-full h-full mt-16 sm:-mt-48 md:-mt-32 z-10  mb-10 m-auto">
          <div className="shadow-md shadow-black mx-2 lg:mx-24  bg-black_ rounded-md">
            <DetailMovie movie={movie} Details={Details} Credits={Credits} />

            {/* OverView */}
            <div className="p-2">
              <div className="flex items-center text-2xl space-x-2 text-white_">
                <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                <h1>Overview</h1>
              </div>
              <div className="my-2 text-white_">
                <h1 className="text-xl text-darkcyan">{movie.tagline}</h1>
                <p className="mt-2">{movie.overview}</p>
              </div>
            </div>

            {/* Pictures */}
            { (Pictures && Pictures.backdrops[1]) &&
              <div className="p-2">
                <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                  <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                  <h1>Images</h1>
                </div>
                <MovieCarousel items={Pictures} />
              </div> }

              {/* Cast */}
              { (Credits && Credits.cast[0]) &&
              <div className="p-2">
                <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                  <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                  <h1>Cast</h1>
                </div>
                <CastCarousel items={Credits.cast} cast />
              </div> }

              {/* Crew */}
              { (Credits && Credits.crew[0]) &&
              <div className="p-2">
                <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                  <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                  <h1>Crew</h1>
                </div>
                <CastCarousel items={Credits.crew} />
              </div> }

              {/* Videos */}
              { (Videos && Videos.results[0]) &&
              <div className="p-2">
                <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                  <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                  <h1>Videos</h1>
                </div>
                <VideoCarousel items={Videos?.results} />
              </div> }

              {/* Extra Details */}
              
              <div className="p-2 flex md:flex-row flex-col">
                <div className="sm:w-1/2">
                <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                  <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                  <h1>Extra Details</h1>
                </div>
                <ExtraDetails item={movie} KeyWords={KeyWords && KeyWords.keywords} />
              </div> 
              
              {/* Collection */}
              { movie.belongs_to_collection &&
              <div className="sm:w-1/2 p-2">
                <div className="flex items-center text-2xl space-x-2 text-white_ ">
                      <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                      <h1>Collection</h1>
                  </div>
                  <Collection item={movie} />
                </div>
                }
              </div> 

                {/* Key words */}
                 {(KeyWords && KeyWords.keywords[0]) && (
                    <li className="flex flex-wrap mx-3 text-white_ py-5">
                      Key Words : &nbsp;
                      {KeyWords.keywords.map((KeyWord, index) => (
                        <Link key={index} to={`/Discover/movies/?keyword=${KeyWord.id}`} className='py-1'>
                        <span
                          key={KeyWord.id}
                          className="text-whitish p-1 rounded bg-grey text-sm sm:text-base mx-0.5 my-0.5 hover:underline cursor-pointer"
                        >
                          {KeyWord.name}
                        </span>
                        </Link>
                      ))}
                    </li>
                  )}

              {/* recommendations */}
              { (recommendations && recommendations.results[0]) &&
              <div className="p-2">
                <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                  <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                  <h1>You may also Like</h1>
                </div>
                <RecCarousel items={recommendations.results} />
              </div> }


              {/* Recently Viewed */}
            {(localStorage.getItem("RecentlyWatched") && JSON.parse(localStorage.getItem("RecentlyWatched"))[1]) &&
              <div className="p-2">
                <div className="flex w-full text-2xl relative items-center space-x-2 text-white_ my-5">
                    <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                    <h1>Recently Viewed</h1>
                </div>
                <RecCarousel items={JSON.parse(localStorage.getItem("RecentlyWatched")).slice(1)} />
              </div> }

                {/* reviews */}
              { reviews && <Reviews reviews={reviews.results} />}
          </div>
        </div>
      </>
    )
    : !Error ? <Loading /> : <NotFound message={"Movie"} />
  );
}

export default Movie;

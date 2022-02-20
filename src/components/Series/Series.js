import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../shared/Loading";
import CastCarousel from "../Movie/items/Cast/CastCarousel";
import MovieCarousel from "../Movie/items/MovieCarousel";
import VideoCarousel from "../Movie/items/Video/VideoCarousel";
import ExtraDetails from "../Movie/items/Reviews/ExtraDetails";
import { SeriesContext } from "./Series_state/SeriesState";
import Reviews from "../Movie/items/Reviews/Reviews";
import SeriesDetail from "./items/SeriesDetail";
import SeriesCarousel from "./items/recommendations/SeriesCarousel";
import Season from "./items/Season";
import NotFound from "../shared/NotFound/NotFound";

function Series() {
  const { id } = useParams();
  const [Series, setSeries] = useState("");
  const [Credits, setCredits] = useState("");
  const [Pictures, setPictures] = useState("");
  const [Videos, setVideos] = useState("");
  const [KeyWords, setKeyWords] = useState("");
  const [Error, setError] = useState("");
  const [recommendations, setrecommendations] = useState("");
  const [reviews, setreviews] = useState("");
  const { FetcherSeries, Fetcher, dispatch, backdrop_loaded } = useContext(SeriesContext);
  
  useEffect(() => {
    FetcherSeries(setSeries, setError, `tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    Fetcher(setCredits,  `tv/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    Fetcher(setVideos, `/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    Fetcher(setPictures, `tv/${id}/images?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_image_language=null`);
    Fetcher(setKeyWords,`tv/${id}/keywords?api_key=${process.env.REACT_APP_API_KEY}`);
    Fetcher(setrecommendations,`tv/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`);
    Fetcher(setreviews,`tv/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`);
  }, [FetcherSeries , Fetcher, id , Series.imdb_id, Error]);

  return Series && !Error ? (
    <>
      <div
        className={`text-white_ relative backdrop-movie ${
          !backdrop_loaded && "skeleton-wave"
        } w-full -z-10 hidden sm:block`}
      >
        <img
          alt=""
          className="h-full w-full"
          onLoad={() =>
            dispatch({ type: "SET_LOADER_BACKDROP", payload: true })
          }
          style={{ display: backdrop_loaded ? "inline" : "none" }}
          src={`https://image.tmdb.org/t/p/original/${Series.backdrop_path}`}
        />
      </div>
      <div className="w-full h-full mt-16 sm:-mt-48 md:-mt-32 z-10  mb-10 m-auto">
        <div className="shadow-md shadow-black mx-2 lg:mx-24  bg-black_ rounded-md">
          <SeriesDetail Series={Series} Credits={Credits} />

          {/* OverView */}
          {
            Series.overview &&
          <div className="p-2 sm:p-5 my-5 sm:my-1">
            <div className="flex items-center text-2xl space-x-2 text-white_">
              <div className="w-1 h-8 rounded-lg bg-yellow"></div>
              <h1>Overview</h1>
            </div>
            <div className="my-2 text-white_">
              <h1 className="text-xl text-darkcyan">{Series.tagline}</h1>
              <p className="mt-2">{Series.overview}</p>
            </div>
          </div>
          }

          {/* Pictures */}
          {(Pictures && Pictures[1]) && (
            <div className="p-2">
              <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                <h1>Images</h1>
              </div>
              <MovieCarousel items={Pictures} />
            </div>
          )}

        {/* Season and episodes */}
        {
        (Series && Series.seasons) &&
        <div className="p-2 sm:p-5 my-5 sm:my-1">
            <div className="flex items-center text-2xl space-x-2 text-white_">
              <div className="w-1 h-8 rounded-lg bg-yellow"></div>
              <h1>Seasons</h1>
            </div>
            <Season seasons={Series.seasons} />
          </div>
        }
          
          {/* Cast */}
          {(Credits && Credits.cast[1] ) && (
            <div className="p-2">
              <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                <h1>Cast</h1>
              </div>
              <CastCarousel items={Credits.cast} cast />
            </div>
          )}

          {/* Crew */}
          {(Credits && Credits.crew[1]) && (
            <div className="p-2">
              <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                <h1>Crew</h1>
              </div>
              <CastCarousel items={Credits.crew} />
            </div>
          )}

          {/* Videos */}
          {(Videos && Videos.results[1] ) && (
            <div className="p-2">
              <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                <h1>Videos</h1>
              </div>
              <VideoCarousel items={Videos?.results} />
            </div>
          )}

          {/* Extra Details */}

          <div className="p-2 flex md:flex-row flex-col">
            <div className="sm:w-1/2">
              <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                <h1>Extra Details</h1>
              </div>
              <ExtraDetails item={Series} />
            </div>
          </div>
          {/* Key words */}
          {(KeyWords && KeyWords.results[0]) && (
            <li className="flex flex-wrap mx-3 text-white_ py-5">
            Key Words : &nbsp;
            {KeyWords.results.map((KeyWord, index) => (
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
          {(recommendations && recommendations.results[1]) && (
            <div className="p-2">
              <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
                <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                <h1>You may also Like</h1>
              </div>
              <SeriesCarousel items={recommendations.results} />
            </div>
          )}


          {/* Recently Viewed */}
          {(localStorage.getItem("RecentlyWatched") && JSON.parse(localStorage.getItem("RecentlyWatched")).slice(1)) &&
              <div className="p-2">
                 <div className="flex w-full text-2xl relative items-center space-x-2 text-white_ my-5">
                    <div className="w-1 h-8 rounded-lg bg-yellow"></div>
                    <h1>Recently Viewed</h1>
                </div>
                <SeriesCarousel items={JSON.parse(localStorage.getItem("RecentlyWatched")).slice(1)} />
              </div> }

          {/* reviews */}
          {reviews && <Reviews reviews={reviews.results} />}
        </div>
      </div>
    </>
  ) : !Error ? (
    <Loading />
  ) : (
    <NotFound message={"Series"} />
  );
}

export default Series;

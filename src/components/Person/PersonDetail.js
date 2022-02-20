import React from "react";
import LazyLoad from "react-lazyload";
import ShowMoreText from "react-show-more-text";
import MovieDetail from "../shared/Movie/MovieDetail";
import DetailPerson from "./items/DetailPerson";

function PersonDetail({ Person }) {
  return (
    <>
        <div className="flex flex-col justify-center  sm:flex-row">
          <div className="h-96 w-72 mx-auto rounded skeleton relative">
            <LazyLoad>
              <img
                alt=""
                className="w-full h-full rounded user-none"
                 //   onLoad={() => dispatch({ type: "SET_LOADER", payload: true })}
                //   style={{ display: Loaded ? "inline" : "none" }}
                src={`https://image.tmdb.org/t/p/w500/${Person.profile_path}`}
              />
            </LazyLoad>
          </div>
          <div className="sm:mx-2 mt-8 sm:w-2/3">
            <h1 className="text-2xl text-white_ ">{Person.name}</h1>
            <div className="text-white_  flex-1">
              <div className="flex flex-col space-y-5 mt-5 w-full justify-between">
                <DetailPerson title="Birthday" item={Person.birthday} />
                <DetailPerson title="Department" item={Person.known_for_department} />
                <DetailPerson title="Place of birth" item={Person.place_of_birth} />
                { Person.deathday && ( <MovieDetail name="Death day" item={Person.deathday} /> )}
              </div>
            </div>
            
          </div>
        </div>
        {
          Person.biography &&
          <>
          <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
            <div className="w-1 h-8 rounded-lg bg-yellow"></div>
            <h1>Biography</h1>
          </div>
            <ShowMoreText
                lines={5}
                more="&#9660; Show more"
                less="&#9650; Show less"
                className="text-white_ mb-8"
                anchorClass="text-darkcyan block text-center"
            >
                {Person.biography}
              </ShowMoreText>
          </>
        }
      
    </>
  );
}

export default PersonDetail;

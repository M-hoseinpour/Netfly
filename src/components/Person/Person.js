import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../shared/Loading";
import NotFound from "../shared/NotFound/NotFound";
import ImagesCarousel from "./items/Images/ImagesCarousel";
import Played from "./items/played/Played";
import PersonDetail from "./PersonDetail";
import { PersonContext } from "./Person_state/PersonState";

function Person() {
  const { id } = useParams();
  const [Person, setPerson] = useState("");
  const [Images, setImages] = useState("");
  const [Movies, setMovies] = useState("");
  const [itemsShow, setitemsShow] = useState(10);
  const [Error, setError] = useState("");
  const { FetcherPerson } = useContext(PersonContext);

  useEffect(() => {
    FetcherPerson(setPerson,setError,`person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false`)
    FetcherPerson(setImages,setError,`person//${id}/images?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false`)
    FetcherPerson(setMovies,setError,`person//${id}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false`)
  },[FetcherPerson, id]);

  return Person && !Error ? 
    (
      <div className="w-full h-full mt-16 mb-10">
        <div className="shadow-md shadow-black p-3 mx-2 lg:mx-24  bg-black_ rounded-md">
          <PersonDetail Person={Person} />
          <ImagesCarousel items={Images.profiles} />
          <div className="py-5">
            <div className="flex items-center text-2xl space-x-2 text-white_ my-5">
              <div className="w-1 h-8 rounded-lg bg-yellow"></div>
              <h1>Movies</h1>
            </div>
            <div className="flex flex-wrap justify-center sm:space-x-5">
            {
              Movies && Movies.cast.slice(0, itemsShow).map((movie) => <Played movie={movie} itemsShow={itemsShow} setitemsShow={setitemsShow} key={movie.id} />)
            }
            </div>
            { Movies &&  <button style={{'display': Movies?.cast.length > itemsShow ? "block" : "none"}} onClick={() => setitemsShow(prev => prev + 10)} className="flex mx-auto text-darkcyan rounded-full p-2 w-32 border">&#9660; Show more</button>}
          </div>
        </div>
      </div> )
  : !Error ? <Loading /> :  <NotFound message={"Person"} />
}

export default Person;

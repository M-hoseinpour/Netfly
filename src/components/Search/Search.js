import React, { useEffect, useState } from "react";
import { useNavigate, useNavigationType , useSearchParams } from "react-router-dom";
import SearchMovies from "./Movies/SearchMovies";
import SearchPeople from "./People/SearchPeople";
import SearchSeries from "./Series/SearchSeries";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const history = useNavigationType()
  const navigate = useNavigate()
  const [searchFor, setsearchFor] = useState("Movies");

  useEffect(() => {
    if(history === "POP") navigate('/')}
  ,[history, navigate])
  
  return (
    <>
      <div className=" flex flex-col justify-center ">
        <div className="mt-20 flex justify-center">
          <input
            value={searchParams.get("query") ? searchParams.get("query") : ""}
            onChange={(e) => setSearchParams({ query: e.target.value })}
            autoFocus
            placeholder="Search for movies, Series and celebrities"
            className="placeholder-darkcyan p-2 w-full mx-3 sm:w-2/4 focus:outline-none rounded"
          />
          <button className="text-white_ mx-2" onClick={() => setSearchParams({ query: "" })}>X</button>
        </div>
        <div className="flex space-x-8 text-white_ justify-center mt-5">
          <button onClick={(e) => setsearchFor(e.target.name)} name='Movies' className={`hover: p-2 rounded ${searchFor === "Movies" && "bg-glassy"}`}>Movies</button>
          <button onClick={(e) => setsearchFor(e.target.name)} name='Series' className={`hover: p-2 rounded ${searchFor === "Series" && "bg-glassy"}`}>Series</button>
          <button onClick={(e) => setsearchFor(e.target.name)} name='Celebrities' className={`hover: p-2 rounded ${searchFor === "Celebrities" && "bg-glassy"}`}>Celebrities</button>
        </div>
      </div>

      { searchFor === 'Celebrities' && <SearchPeople /> }
      { searchFor === 'Movies' && <SearchMovies /> }
      { searchFor === 'Series' && <SearchSeries /> }
    </>
  );
}

export default Search;

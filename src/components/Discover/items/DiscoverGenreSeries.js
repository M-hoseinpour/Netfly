import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as Search } from "../../shared/icons/arrowDown.svg";

function DiscoverSort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showGenre, setshowGenre] = useState(false)
  const params = Object.fromEntries([...searchParams])
  const ref = useRef()
  useEffect(() => {
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) setshowGenre(false)
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {document.removeEventListener("mousedown", handleClickOutside);};
    }, [ref]);
  return (
    <div ref={ref} className='relative w-full px-2 mt-5'>
        <button onClick={() => setshowGenre(prev => !prev)} className="text-white w-full h-16 bg-glassy hover:bg-darkcyan rounded text-sm p-3  text-center flex items-center" type="button">
            <div className='w-full'>
                <span className='block text-left text-xs'>Genre :</span>
                <span className='block text-left text-whitish'>{searchParams.get("Genre") || "All"}</span>
            </div>
            <Search />
        </button>
            <div className={`${!showGenre && "hidden"} flex absolute rounded z-10 w-full list-none bg-gray text-white_ shadow-lg`}>
                <div>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params ,Genre: "All" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">All</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params ,Genre: "Action, Adventure" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Action & Adventure</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params ,Genre: "Animation" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Animation</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params ,Genre: "Comedy" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Comedy</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params ,Genre: "Crime" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Crime</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params ,Genre: "Documentary" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Documentary</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params ,Genre: "Drama" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Drama</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params ,Genre: "Family" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Family</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params ,Genre: "Kids" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Kids</button>
                </div>
                <div>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params ,Genre: "Mystery" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Mystery</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params , Genre: "News" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">News</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params , Genre: "Reality" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Reality</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params , Genre: "Sci-Fi, Fantasy" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Sci-Fi & Fantasy</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params , Genre: "Soap" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Soap</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params , Genre: "Talk" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Talk</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params , Genre: "War, Politics" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">War & Politics</button>
                    <button onClick={() => {setshowGenre(false) ;setSearchParams({ ...params , Genre: "Western" })}} className="py-2 px-4 w-full rounded text-left text-sm hover:text-white">Western</button>
                </div>
            </div>
    </div>
  )
}

export default DiscoverSort
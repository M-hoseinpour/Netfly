import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as Search } from "../../shared/icons/arrowDown.svg";

function DiscoverSort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showSort, setshowSort] = useState(false)
  const params = Object.fromEntries([...searchParams])
  const ref = useRef()
  useEffect(() => {
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) setshowSort(false)
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {document.removeEventListener("mousedown", handleClickOutside);};
    }, [ref]);
  return (
    <>
    <div ref={ref} className='w-full relative px-2 mt-5'>
        <button onClick={() => setshowSort(prev => !prev)} className="w-full text-white h-16 bg-glassy hover:bg-darkcyan rounded text-sm p-3  text-center flex items-center" type="button">
            <div className='w-full'>
                <span className='block text-left text-xs'>Sort by :</span>
                <span className='block text-left text-whitish'>{searchParams.get("SortBy") || "Popularity"}</span>
            </div>
            <Search />
        </button>
        <div className={`${!showSort && "hidden"} pr-4 w-full absolute rounded z-10  list-none  text-white_ rounded shadow-lg`}>
            <ul className="py-1  bg-gray" aria-labelledby="dropdownButton">
                <button onClick={(e) => {setshowSort(false) ;setSearchParams({ ...params ,SortBy: e.target.name })}} name="popularity" className="block py-2 px-4 w-full rounded text-left text-sm hover:bg-darkcyan">Popularity</button>
                <li><button onClick={(e) => {setshowSort(false) ;setSearchParams({ ...params ,SortBy: e.target.name})}} name="vote_average" className="block py-2 px-4 w-full rounded text-left text-sm hover:bg-darkcyan">Vote average</button></li>
                <li><button onClick={(e) => {setshowSort(false) ;setSearchParams({ ...params ,SortBy: e.target.name})}} name="release_date" className="block py-2 px-4 w-full rounded text-left text-sm hover:bg-darkcyan">Release date</button></li>
                <li><button onClick={(e) => {setshowSort(false) ;setSearchParams({ ...params ,SortBy: e.target.name})}} name="revenue" className="block py-2 px-4 w-full rounded text-left text-sm hover:bg-darkcyan">Revenue</button></li>
            </ul>
        </div>
    </div>
    <div className='mt-5 w-full px-2'>
        <button onClick={() => searchParams.get('Sort') === 'asc' ? setSearchParams({ ...params, Sort: "desc"  }) : setSearchParams({ ...params, Sort: "asc"  }) } className="w-full text-white h-16 bg-glassy hover:bg-darkcyan rounded text-sm p-3  text-center flex items-center" type="button">
            <div className='w-full'>
                <span className='block text-left text-whitish'>{ searchParams.get('Sort') === 'asc' ? "ascending" : "descending" }</span>
            </div>
            {/* <Search /> */}
        </button>
    </div>
    </>
  )
}

export default DiscoverSort
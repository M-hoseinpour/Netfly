import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchItem from '../Search/Movies/SearchItem';
import LoadingSpinner from '../Discover/items/LoadingSpinner';

function Collection() {
  const { id } = useParams();
  const [collection, setcollection] = useState("");
  const [loading, setloading] = useState(false);
  const [backdrop_loaded, setbackdrop_loaded] = useState(false);
  const [Error, setError] = useState(false);

  useEffect(() => {
    setloading(false)
    axios.get(`/collection/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then((res) => {setcollection(res.data); setloading(true)})
    .catch(() => setError(true))
  }, [id])

  return (
    <>
      <div className={`text-white_ relative backdrop-movie ${ !backdrop_loaded && 'skeleton-wave'} w-full -z-10 `}>
        <picture
          alt=''
          onLoad={() => setbackdrop_loaded(true)}
          className="h-full w-full"
          style={{"display" : backdrop_loaded ? "inline" : "none" }} >
          <source
            media="(min-width:750px)"
            srcSet={`https://image.tmdb.org/t/p/original/${collection.backdrop_path}`}
          />
          <img
            alt=''
            className="object-fill w-full carousel_image  h-fill"
            src={`https://image.tmdb.org/t/p/original/${collection.poster_path}`}
          />
        <div className='absolute bottom-5 md:left-16 left-2'>
          <h1 className='text-2xl'>{collection.name}</h1>
          <p className='text-sm'>{collection.overview}</p>
        </div>
        </picture>
      </div>
      <div className='-mt-5'>
        {loading ? 
            <div className="flex flex-wrap justify-center sm:space-x-5">
              {collection &&
                collection?.parts.map((movie, index) => (
                  <SearchItem key={index} index={index} movie={movie} />
                ))}
            </div>
          :  !Error ? <div className='flex justify-center mt-8'><LoadingSpinner /></div> : <h1 className='text-5xl mt-16 text-white_'>404</h1> }
      </div>
    </>
  )
}

export default Collection
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import DiscoverSort from './items/DiscoverSort';
import DiscoverYear from './items/DiscoverYear';
import DiscoverGenre from './items/DiscoverGenre';
import DiscoverGenreSeries from './items/DiscoverGenreSeries';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchItem from '../Search/Movies/SearchItem';
import { Genres } from '../shared/Constants/Genre';
import { GenreSeries } from '../shared/Constants/GenreSeries';
import DiscoverNew from './items/DiscoverNew';
import LoadingSpinner from './items/LoadingSpinner';

function MovieDiscover({ type }) {
  const [searchParams] = useSearchParams();
  const [movies, setmovies] = useState("");
  const [Total, setTotal] = useState("");
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);

  let GenreID = type === "movie" ? Genres.find((genre) => genre.name === searchParams.get("Genre")) : GenreSeries.find((genre) => genre.name === searchParams.get("Genre"))
  GenreID = GenreID && GenreID.id

  const fetchGenre = () => {
    axios.get(`/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=${(GenreID && GenreID) || ''}&page=${page}&include_adult=false${searchParams.get("SortBy") ? `sort_by=${searchParams.get("SortBy") + `.${searchParams.get("Sort")|| "desc"}`}` : '' }&${searchParams.get("FromYear") ? `primary_release_date.gte=${searchParams.get("FromYear")}` : ""}&${searchParams.get("ToYear") ? `primary_release_date.lte=${searchParams.get("ToYear")}` : ""}&${searchParams.get("Sort") && "vote_count.gte=100&" }${searchParams.get("keyword") && `&with_keywords=${searchParams.get("keyword")}`}`)
      .then((res) => {setmovies((prev) => [...prev, ...res.data.results]); setTotal((res.data.total_results))}); setpage((page) => page + 1);
  }

  useEffect(() => {
    page !== 1 && setpage(1)
    setloading(false)
    const timeout = setTimeout(() => {
      axios.get(`/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&${(GenreID && `with_genres=${GenreID}`) || ''}&page=${page}&${searchParams.get("SortBy") ? `sort_by=${searchParams.get("SortBy") + `.${searchParams.get("Sort") || "desc"}`}` : '' }&${searchParams.get("FromYear") ? `${type === 'movie' ? "primary_release_date.gte" : "first_air_date.gte"}=${searchParams.get("FromYear")}` : ""}&${searchParams.get("ToYear") ? `${type === 'movie' ? "primary_release_date.lte" : "first_air_date.lte"}=${searchParams.get("ToYear")}` : ""}&${searchParams.get("Sort") && "vote_count.gte=100&" }${searchParams.get("keyword") && `&with_keywords=${searchParams.get("keyword")}`}`)
      .then((res) => {setmovies(res.data.results) ;setloading(true); setTotal((res.data.total_results))}); setpage((page) => page + 1);
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, [GenreID, searchParams, type])

  return (
    <div className='mt-16'>
    { (!searchParams.get("type") && !searchParams.get("keyword")) &&
      <div className=' flex  justify-center items-center'>
          <div className='w-5/6  rounded flex flex-col md:flex-row justify-evenly items-center'>
            {type === 'movie' ? <DiscoverGenre  /> : <DiscoverGenreSeries />}
            <DiscoverYear  />
            <DiscoverSort  />
          </div>
      </div>
    }

      {loading ? 
        !searchParams.get("type") &&
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchGenre}
          hasMore={movies.length < Total ? true : false}
          loader={<div className='flex justify-center mt-8'><LoadingSpinner /></div>}
          scrollThreshold={1}
        >
          <div className="flex flex-wrap justify-center sm:space-x-5">
            {movies &&
            
              movies?.map((movie, index) => (
                <SearchItem key={index} index={index} movie={movie} />
              ))}
          </div>
        </InfiniteScroll>: <div className='flex justify-center mt-8'><LoadingSpinner /></div> }
        { searchParams.get("type") && <DiscoverNew type={type} /> }
    </div>
  )
}

export default MovieDiscover
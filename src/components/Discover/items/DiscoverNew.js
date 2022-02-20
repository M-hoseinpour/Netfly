import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import SearchItem from "../../Search/Movies/SearchItem";
import LoadingSpinner from "./LoadingSpinner";

function DiscoverNew({ type }) {
  const [searchParams] = useSearchParams();
  const [movies, setmovies] = useState("");
  const [Total, setTotal] = useState("");
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);

  const fetchNew = () => {
    axios.get(`${type}/${searchParams.get("type")}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&include_adult=false`)
      .then((res) => {setmovies((prev) => [...prev, ...res.data.results]); setTotal((res.data.total_results))}); setpage((page) => page + 1);
  }

  useEffect(() => {
    setpage(1)
    setloading(false)
    axios.get(`${type}/${searchParams.get("type")}?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false`)
    .then((res) => {setmovies(res.data.results) ;setloading(true); setTotal((res.data.total_results))}); setpage((page) => page + 1);
  }, [searchParams, type])

  return loading ? (
      <div className="mt-24">
        <InfiniteScroll
        dataLength={movies.length}
        next={fetchNew}
        hasMore={movies.length < Total ? true : false}
        loader={<LoadingSpinner />}
        scrollThreshold={1}
        >
        <div className="flex flex-wrap justify-center sm:space-x-5">
            {movies &&
            movies?.map((movie, index) => (
                <SearchItem key={index} index={index} movie={movie} />
            ))}
        </div>
        </InfiniteScroll>
        </div>
  ) : (
      <div className="mt-24"><LoadingSpinner /></div>
    
  );
}

export default DiscoverNew;

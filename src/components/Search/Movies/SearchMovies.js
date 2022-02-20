import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import SearchItem from "../Movies/SearchItem";
import LoadingSpinner from "../../Discover/items/LoadingSpinner";
import NoResults from "../NoResults";

function SearchMovies() {
  const [movies, setmovies] = useState("");
  const [Total, setTotal] = useState("");
  const [page, setpage] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setmovies("");
    setTotal("");
    setpage(1);
    let cancel;
    searchParams.get("query") &&
      axios({
        method: "GET",
        url: `/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&include_adult=false`,
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
        params: { query: searchParams.get("query") },
      })
        .then((res) => {
          setmovies(res.data.results);
          setTotal(res.data.total_results);
          setpage((page) => page + 1);
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
        });
    return () => searchParams.get("query") && cancel();
  }, [searchParams]);

  const fetchmovies = () => {
    axios.get(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=
          ${searchParams.get("query")}&page=${page}&include_adult=false`)
          .then((res) => setmovies((prev) => [...prev, ...res.data.results]));
      setpage((page) => page + 1);
  };

  return searchParams.get("query") ? (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchmovies}
      hasMore={movies.length < Total ? true : false}
      loader={<LoadingSpinner />}
      scrollThreshold={1}
    >
      <div className="flex flex-wrap justify-center sm:space-x-5">
        {movies ?
        movies[0] ?
          movies?.map((movie, index) => (
            <SearchItem
              key={index}
              movie={movie}
              inputSearch={searchParams.get("query")}
            />
          )) : <NoResults /> :  <div className='mt-8'><LoadingSpinner /></div> }
      </div>
    </InfiniteScroll>
  ) : null
}

export default SearchMovies;

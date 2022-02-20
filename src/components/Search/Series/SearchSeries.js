import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import SearchItem from "../Movies/SearchItem";
import LoadingSpinner from "../../Discover/items/LoadingSpinner";

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
        url: `https://api.themoviedb.org/3/search/tv?&api_key=106c83910906b48240da2093bdd42a0e&include_adult=false`,
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
    axios
      .get(
        `/search/tv?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchParams.get(
          "query"
        )}&page=${page}&include_adult=false`
      )
      .then((res) => setmovies((prev) => [...prev, ...res.data.results]));
    setpage((page) => page + 1);
  };

  return searchParams.get("query") ? (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchmovies}
      hasMore={movies.length < Total ? true : false}
      loader={<LoadingSpinner />}
    >
      <div className="flex flex-wrap justify-center sm:space-x-5">
        {movies &&
          movies?.map((movie) => (
            <SearchItem
              key={movie.id}
              movie={movie}
              inputSearch={searchParams.get("query")}
            />
          ))}
      </div>
    </InfiniteScroll>
  ) : null;
}

export default SearchMovies;

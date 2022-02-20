import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../../Discover/items/LoadingSpinner";
import NoResults from "../NoResults";
import SearchPerson from "./SearchPerson";


function SearchPeople() {
  const [People, setPeople] = useState("");
  const [Total, setTotal] = useState("");
  const [page, setpage] = useState(1);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setPeople("");
    setTotal("");
    setpage(1);
    let cancel;
    searchParams.get("query") &&
      axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/person?&api_key=106c83910906b48240da2093bdd42a0e&include_adult=false`,
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
        params: { query: searchParams.get("query") },
      })
        .then((res) => {
          setPeople(res.data.results);
          setTotal(res.data.total_results);
          setpage((page) => page + 1);
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
        });
    return () => searchParams.get("query") && cancel();
  }, [searchParams]);

  const fetchPeople = () => {
    axios.get(`/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchParams.get("query")}&page=${page}&include_adult=false`)
      .then((res) => setPeople((prev) => [...prev, ...res.data.results]));
      setpage((page) => page + 1);
  };

  return searchParams.get("query") ? (
    <InfiniteScroll
      dataLength={People.length}
      next={fetchPeople}
      hasMore={People.length < Total ? true : false}
      loader={<LoadingSpinner />}
    >
      <div className="flex flex-wrap justify-center sm:space-x-5">
        {People ?
          People[0] ?
          People?.map((person) => (
            <SearchPerson
              key={person.id}
              Person={person}
              inputSearch={searchParams.get("query")}
            />
          )) : <NoResults /> : <div className='mt-8'><LoadingSpinner /></div> }
      </div>
    </InfiniteScroll>
  ) : null;;
}

export default SearchPeople;

import React, { useCallback, useReducer } from "react";
import MovieReducer from "./MovieReducer";
import axios from "axios";


export const MovieContext = React.createContext();

const MovieState = ({ children }) => {
  const initialState = { Loaded : false, backdrop_loaded: false };
  const [state, dispatch] = useReducer(MovieReducer, initialState);
  
  const FetcherMovie = useCallback(async (setter, errorsetter , url) =>
    await axios.get(url)
        .then((res) => {setter(res.data)}).catch((e) => errorsetter(true))
        ,[]);

  const Fetcher = useCallback(async (setter , url) =>
    await axios.get(url)
        .then((res) => {setter(res.data)}).catch((e) => console.log(true))
        ,[]);

  return (
    <MovieContext.Provider
      value={{
        ...state,
        FetcherMovie,
        Fetcher,
        dispatch
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieState;
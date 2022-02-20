import React, { useCallback, useReducer } from "react";
import SeriesReducer from "./SeriesReducer";
import axios from "axios";

export const SeriesContext = React.createContext();

const SeriesState = ({ children }) => {
  const initialState = { Loaded : false, backdrop_loaded: false };
  const [state, dispatch] = useReducer(SeriesReducer, initialState);

  
  const FetcherSeries = useCallback(async (setter, errorsetter , url) =>
    await axios.get(url)
        .then((res) => {setter(res.data)}).catch((e) => errorsetter(true))
        ,[]);

  const Fetcher = useCallback(async (setter , url) =>
    await axios.get(url)
        .then((res) => {setter(res.data)}).catch((e) => console.log(true))
        ,[]);

  return (
    <SeriesContext.Provider
      value={{
        ...state,
        FetcherSeries,
        Fetcher,
        dispatch
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};

export default SeriesState;
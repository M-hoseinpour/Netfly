import React, { useCallback, useReducer } from "react";
import PersonReducer from "./PersonReducer";
import axios from "axios";


export const PersonContext = React.createContext();

const PersonState = ({ children }) => {
  const initialState = { Loaded : false, backdrop_loaded: false };
  const [state, dispatch] = useReducer(PersonReducer, initialState);

  
  const FetcherPerson = useCallback(async (setter, errorsetter , url) =>
    await axios.get(url)
        .then((res) => {setter(res.data)}).catch((e) => errorsetter(true))
        ,[])

  return (
    <PersonContext.Provider
      value={{
        ...state,
        FetcherPerson,
        dispatch
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export default PersonState;
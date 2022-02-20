import React, { useReducer } from 'react';
import HomeReducer from "./HomeReducer";

const HomeContext = React.createContext()

function HomeState({ children }) {
    const initialState= {}
    const [state, dispatch] = useReducer(HomeReducer, initialState)

    return (
        <HomeContext.Provider
        value = {{
            ...state,
            dispatch
        }}
        >
            {children}
        </HomeContext.Provider>

    )
    }

export default HomeState;
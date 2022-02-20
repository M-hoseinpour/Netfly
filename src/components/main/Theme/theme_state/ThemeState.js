import React, { useReducer } from 'react';
import ThemeReducer from "./ThemeReducer";

export const ThemeContext = React.createContext()

function ThemeState({ children }) {
    const initialState= { night_theme: true }
    const [state, dispatch] = useReducer(ThemeReducer, initialState)

    return (
        <ThemeContext.Provider
        value = {{
            ...state,
            dispatch
        }}
        >
            {children}
        </ThemeContext.Provider>

    )
    }

export default ThemeState;

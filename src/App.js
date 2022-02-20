import Main from "./components/main/Main";
import React from 'react';
import MainState from "./components/main/main_state/MainState";
import axios from "axios";
import { Auth0Provider } from '@auth0/auth0-react'

axios.defaults.baseURL = "https://api.themoviedb.org/3/"
const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin} 
      >
      <MainState>
        <Main />
      </MainState>
    // </Auth0Provider>
  );
}

export default App;

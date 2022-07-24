import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import FavouritesPage from './components/FavouritesPage/FavouritesPage';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const CLIENT_ID = "18cb6bd064e24bcb9acebc5955db5101";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }
  }, [])


  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  }

  return (
    <div className="App relative">
      <NavBar TokenState={token} LogOut={logout} />
      {!token && <a href={AUTH_ENDPOINT + '?client_id=' + CLIENT_ID + '&redirect_uri=' + REDIRECT_URI + '&response_type=' + RESPONSE_TYPE} onClick={() => {console.log(token)}} className="text-white text-3xl" >Login to spotify</a>}
      {/* {token && <button className="text-neutral-900 text-lg font-bold py-2 px-4 m-4 bg-pearmint rounded-3xl " onClick={logout}>Log Out</button>} */}
      <FavouritesPage/>
    </div>
  );
}

export default App;

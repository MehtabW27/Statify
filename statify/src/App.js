import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import FavouritesPage from './components/FavouritesPage/FavouritesPage';

function App() {
  return (
    <div className="App relative">
      <NavBar />
      <FavouritesPage/>
    </div>
  );
}

export default App;

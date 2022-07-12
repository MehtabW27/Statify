import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import FavouritesPage from './components/FavouritesPage/FavouritesPage';
import MediumCard from './components/mediumCard/medCard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <FavouritesPage/>
    </div>
  );
}

export default App;

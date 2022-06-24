import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';


function App() {

  const [games,setGames] = useState([]);
useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9e29e4600fmshd449dc345ba86b9p128ef9jsn5e119316a215',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

  fetch(url, options)
    .then(response => response.json())
    .then(response => setGames(response))
    .catch(err => console.error(err));
}, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Games-APP-React' element={<Home games={games} />} />
        </Routes>
        
      </Router>
      
    </>
  );
}

export default App;

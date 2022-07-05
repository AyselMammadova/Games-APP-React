import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import CurrentGames from './components/pages/CurrentGames';
import CardContextProvider from './components/context-api/CardContext';

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Games-APP-React/' element={<Home />} />
          <Route path='/current-games' element={<CardContextProvider><CurrentGames /></CardContextProvider>} />
        </Routes>
        
      </Router>
      
    </>
  );
}

export default App;

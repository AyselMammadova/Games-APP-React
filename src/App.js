import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import CurrentGames from './components/pages/CurrentGames';
import FavGames from './components/pages/FavGames';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.png';
import img4 from './img/4.jpeg';
import img5 from './img/5.jpg'


function App() {

  //slider 
  const slider = [
    img1,
    img2,
    img3,
    img4,
    img5
  ]

  let [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          const nextSlide = ++ slideIndex % slider.length;
          setSlideIndex(nextSlide);
      }, 2000);
      return () => clearInterval(interval);
  }, [slideIndex, slider.length]);


  //search
  const [searchItem, setSearchItem] = useState('');

  const onChange = (e) => {
      e.preventDefault();
      setSearchItem(e.target.value);
  }


  //add favlist
  const [fav, setFav] = useState(false);

    const AddFav = () => {
      setFav(!fav)
    }
  
    useEffect(() => {
      const favPosition = window.localStorage.getItem('fav');
      console.log(favPosition);
      if(favPosition !== null) {
        setFav(JSON.parse(favPosition))
      }
    }, []);
  
    useEffect(() => {
      window.localStorage.setItem('fav', JSON.stringify(fav));
    }, [fav])

  
  return (
    <>

      <Router>

        <Navbar />
        
        <Routes>
          <Route path='/Games-APP-React/' element={<Home fav={fav} AddFav={AddFav} />} />
          <Route path='/current-games' element={<CurrentGames slider={slider[slideIndex]} searchedItem={searchItem} onChange={onChange} fav={fav} AddFav={AddFav} />} />
          <Route path='/fav-games' element={<FavGames slider={slider[slideIndex]} searchedItem={searchItem} onChange={onChange} fav={fav} AddFav={AddFav} />} />
        </Routes>
        
      </Router>
    
    </>
  );
}

export default App;

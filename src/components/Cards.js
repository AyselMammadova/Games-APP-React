import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import image from '../img/1.jpg';
import './Cards.css'

function Cards() {
  const [games,setGames] = useState({items: []});
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9e29e4600fmshd449dc345ba86b9p128ef9jsn5e119316a215',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    let url = 'https://free-to-play-games-database.p.rapidapi.com/api/game';
    console.log(games);
    fetch(url + '?id=452', options)
      .then(response => response.json())
      .then((json) => {
        setGames({
          items: json,
        })
    }).catch(err => console.error(err));
  }, [])

  console.log(setGames);




  return (
    <div className="cards">
        <h1>Text</h1>
        <div className="cards__container">
            <div className="cards_wrapper">
                <div className="cards__items">
                <CardItem
                    src={image}
                    text={setGames[0]}
                    label='Adventure'
                    path='/'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
// import image from '../img/1.jpg';
import './Cards.css'

function Cards() {
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


console.log(games);

  return (
    <div className="cards">
        <h1>Oyunlar aləmi</h1>
        <div className="cards__container">
            <div className="cards_wrapper">
                <div className="cards__items row">
                
                {games.map(game => 
                  <CardItem
                  key={game.id}
                  src={game.thumbnail}
                  text={game.title}
                  desc={game.short_description}
                  label={game.genre}
                  date={game.release_date}
                  path='/'
                  />
           
                )}

              </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards(props) {
 
  return (
    <div className="cards">
        <h1>Hit oyunlar</h1>
        <div className="cards__container">
            <div className="cards_wrapper">
                <div className="cards__items row">
                
                {props.games.slice(0, 9).map(game => 
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
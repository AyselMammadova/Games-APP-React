import React from 'react';
import CardItem from '../CardItem';
import '../Cards.css';
import { CardContext } from '../contexts/CardContext';

function CurrentGames() {
  return (
    <CardContext.Consumer>
      {value => {
        return(
          <div className="cards">
              <h1>Oyunlar</h1>
              <div className="cards__container">
                  <div className="cards_wrapper">
                      <div className="cards__items row">
                      
                      {value.games.map(game => 
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
      }}
    </CardContext.Consumer>
  )
}

export default CurrentGames
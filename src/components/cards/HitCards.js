import React from 'react';
import CardItem from './CardItem';
import '../cards/Cards.css';
import { CardContext } from '../context-api/CardContext';
import { Link } from 'react-router-dom';

function HitCards(props) {
 
  return (
    <CardContext.Consumer>
      {value => {
        return (
          <div className="cards">
              <div className="custom-container">
                <h1>Sənə maraqlı gələ biləcək oyunlar</h1>
                  <div className="cards_wrapper">
                      <div className="cards__items row">
                        {value.games.slice(0, 12).map(game => 
                          <CardItem
                          key={game.id}
                          id={game.id}
                          src={game.thumbnail}
                          text={game.title}
                          desc={game.short_description}
                          label={game.genre}
                          date={game.release_date}
                          />
                        )}
                      

                    </div>
                  </div>

                  <Link to='/current-games' className="all-games">
                    Bütün oyunlara bax
                  </Link>
              </div>
          </div>
        )
      }}
    </CardContext.Consumer>
  )
}

export default HitCards
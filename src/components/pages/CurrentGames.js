import React, { useState } from 'react';
import CardItem from '../CardItem';
import '../Cards.css';
import { CardContext } from '../contexts/CardContext';
import Pagination from '../Pagination';

function CurrentGames() {

  const [currentPage, setCurrentPage] = useState(1);
  const [gamePerPage] = useState(9); 

  const indexOfLastGame = currentPage * gamePerPage;
  const indexOfFirstGame = indexOfLastGame - gamePerPage;
  



  return (
    <CardContext.Consumer>
      {value => {
        return(
          <div className="cards">
              <h1>Oyunlar</h1>
              <div className="cards__container">
                  <div className="cards_wrapper">
                    <div className="cards__items row">
                      
                      {value.games.slice(indexOfFirstGame, indexOfLastGame).map(game => 
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
                    
                    <Pagination 
                    pages = {Math.ceil(value.games.length / gamePerPage)}
                    setCurrentPage = {setCurrentPage}
                    totalGames = {value.games.length}  
                    indexOfLastGame = {indexOfLastGame} />
                  </div>
              </div>
          </div>
        )
      }}
    </CardContext.Consumer>
  )
}

export default CurrentGames
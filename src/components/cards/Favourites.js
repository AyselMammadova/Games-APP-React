import React, { useState } from 'react';
import CardItem from './CardItem';
import '../cards/Cards.css';
import { CardContext } from '../context-api/CardContext';
import Pagination from '../pagination/Pagination';


function Favourites(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [gamePerPage] = useState(12); 

  const indexOfLastGame = currentPage * gamePerPage;
  const indexOfFirstGame = indexOfLastGame - gamePerPage;


  return (
    <CardContext.Consumer>
      {value => {
        return(
          <div className="cards">
              <h1>Sevimli Oyunların</h1>
              <div className="cards__container">
                  <div className="cards_wrapper w-100">
                    <div className="cards__items row">
                      
                      {value.games.filter(game => {
                        if(props.searchedItem === '') {
                          return game
                        } else if(game.title.toLowerCase().includes(props.searchedItem.toLowerCase())) {
                          return game
                        }
                        return false
                      }).slice(indexOfFirstGame, indexOfLastGame).map(game => 
                        <CardItem
                        key={game.id}
                        src={game.thumbnail}
                        text={game.title}
                        desc={game.short_description}
                        label={game.genre}
                        date={game.release_date}
                        fav={false}
                        />
                
                      )}

                    </div>
                    
                    <Pagination 
                    pages = {Math.ceil(value.games.filter(game => {
                      if(props.searchedItem === '') {
                        return game
                      } else if(game.title.toLowerCase().includes(props.searchedItem.toLowerCase())) {
                        return game
                      }
                      return false
                    }).length / gamePerPage)}
                    setCurrentPage = {setCurrentPage}
                    totalGames = {value.games.filter(game => {
                      if(props.searchedItem === '') {
                        return game
                      } else if(game.title.toLowerCase().includes(props.searchedItem.toLowerCase())) {
                        return game
                      }
                      return false
                    }).length}  
                    indexOfLastGame = {indexOfLastGame} />
                  </div>
              </div>
          </div>
        )
      }}
    </CardContext.Consumer>
  )
}

export default Favourites
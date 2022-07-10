import React, { useState } from 'react';
import CardItem from './CardItem';
import '../cards/Cards.css';
import { CardContext } from '../context-api/CardContext';
import Pagination from '../pagination/Pagination';
import Select from 'react-select';


function AllGames(props) {

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [gamePerPage] = useState(12); 

  const indexOfLastGame = currentPage * gamePerPage;
  const indexOfFirstGame = indexOfLastGame - gamePerPage;

  //select
  const selects = [
    { value: 'asc', label: 'Köhnədən Yeniyə' },
    { value: 'desc', label: 'Yenidən Köhnəyə' }
  ]

  const customStyles = {
    control: (base, state) => ({
       ...base,
       border: state.isFocused ? "3px solid #01b36b" : "3px solid #dee2e6",
       boxShadow: state.isFocused ? "0px 0px 6px #01b36b" : "none",
       "&:hover": {
         border: "3px solid #01b36b",
         boxShadow: "0px 0px 6px #01b36b"
       }
     }),
     option: (base, state) => ({
      ...base,
      color: state.isSelected ? "#dee2e6" : "#000",
      backgroundColor: state.isSelected ? "#fff" : "#fff",
      cursorPointer: state.isSelected ? "none" : "pointer",
      "&:hover": {
        backgroundColor: state.isSelected ? "#fff" : "#01b36b80"
      }
    }),
   };

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }


  return (
    <CardContext.Consumer>
      {value => {
        return(
          <div className="cards">
              <div className="custom-container">
                <div className="cards_wrapper w-100">
                  <div className="row mb-4 align-items-center">
                    <div className="col-lg-5">
                      <h1 className='text-lg-start mb-4 mb-lg-0'>Oyunlar</h1>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                          <div className="col-md-8">
                            <Select 
                              value={selectedOption}
                              onChange={handleChange}
                              styles={customStyles}
                              options={selects} 
                              placeholder={<div>Çıxış tarixinə görə filtrlə...</div>} 
                            />
                          </div>
                          <div className="col-md-4 mt-2 mt-md-0">
                            <button className="w-100 btn border border-3 rounded-0" onClick={() => setSelectedOption('')}>Filteri sıfırla</button>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="cards__items row">

                      {value.games.filter(game => {
                        if(props.searchedItem === '') {
                          return game
                        } else if(game.title.toLowerCase().includes(props.searchedItem.toLowerCase())) {
                          return game
                        }
                        return false
                      }).sort((a, b) => {
                        if(selectedOption.value === 'asc') {
                          return a.release_date > b.release_date ? 1 : a.release_date < b.release_date ? -1 : 0;
                        } else if(selectedOption.value === 'desc') {
                          return a.release_date > b.release_date ? -1 : a.release_date < b.release_date ? 1 : 0;
                        } else if(selectedOption.value === '') {
                          return 0
                        } 
                        return 0
                      }).slice(indexOfFirstGame, indexOfLastGame).map(game => 
                        <CardItem
                        key={game.id}
                        id={game.id}
                        src={game.thumbnail}
                        text={game.title}
                        desc={game.short_description}
                        label={game.genre}
                        date={game.release_date}
                        fav={game.fav}
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

export default AllGames
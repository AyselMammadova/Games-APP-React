import React from 'react';
import '../../App.css';
import '../main-section/MainSection.css';
import Favourites from '../cards/Favourites.js'
import MainSectionPages from '../main-section/MainSectionPages';
import CardContextProvider from '../context-api/CardContext';


function FavGames(props) {

    return (
        <>
            <MainSectionPages slider={props.slider} searchedItem={props.searchedItem} onChange={props.onChange} />

            <CardContextProvider>
              <Favourites searchedItem={props.searchedItem} fav={props.fav} AddFav={props.AddFav} />
            </CardContextProvider>
        </>
    )
}

export default FavGames
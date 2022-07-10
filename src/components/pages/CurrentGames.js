import React from 'react';
import '../../App.css';
import '../main-section/MainSection.css';
import AllGames from '../cards/AllGames';
import MainSectionPages from '../main-section/MainSectionPages';
import CardContextProvider from '../context-api/CardContext';


function CurrentGames(props) {
    

    return (
        <>
            <MainSectionPages slider={props.slider} searchedItem={props.searchedItem} onChange={props.onChange} />

            <CardContextProvider>
              <AllGames searchedItem={props.searchedItem} />
            </CardContextProvider>
        </>
    )
}

export default CurrentGames
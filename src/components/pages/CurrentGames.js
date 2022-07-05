import React from 'react';
import '../../App.css';
import MainSectionPages from '../main-section/MainSectionPages';
import AllGames from '../cards/AllGames';
import CardContextProvider from '../context-api/CardContext';

function CurrentGames() {
    return (
        <>
            <MainSectionPages />
            <CardContextProvider>
              <AllGames />
            </CardContextProvider>
        </>
    )
}

export default CurrentGames
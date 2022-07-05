import React from 'react';
import '../../App.css';
import MainSection from '../main-section/MainSection';
import Cards from '../cards/Cards';
import CardContextProvider from '../context-api/CardContext';

function Home() {
    
    return (
        <>
            <MainSection />
            <CardContextProvider>
                <Cards />
            </CardContextProvider>
        </>
    );
}

export default Home
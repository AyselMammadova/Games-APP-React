import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import MainSection from '../MainSection';
import CardContextProvider from '../contexts/CardContext';

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
import React from 'react';
import '../../App.css';
import MainSection from '../main-section/MainSection';
import HitCards from '../cards/HitCards';
import CardContextProvider from '../context-api/CardContext';

function Home() {
    
    return (
        <>
            <MainSection />
            <CardContextProvider>
                <HitCards />
            </CardContextProvider>
        </>
    );
}

export default Home
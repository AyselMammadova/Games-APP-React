import React from 'react';
import '../../App.css';
import MainSection from '../main-section/MainSection';
import HitCards from '../cards/HitCards';
import CardContextProvider from '../context-api/CardContext';

function Home(props) {
    
    return (
        <>
            <MainSection />
            <CardContextProvider>
                <HitCards  fav={props.fav} AddFav={props.AddFav} />
            </CardContextProvider>
        </>
    );
}

export default Home
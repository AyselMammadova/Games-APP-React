import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import MainSection from '../MainSection';

function Home(props) {
    console.log(props)
    return (
        <>
            <MainSection />
            <Cards games={props.games}/>
        </>
    );
}

export default Home
import React, { useState, useEffect } from 'react'

export const CardContext = React.createContext();


function CardContextProvider (props) {

    const [games,setGames] = useState([]);
    useEffect(() => {
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9e29e4600fmshd449dc345ba86b9p128ef9jsn5e119316a215',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
        };

        let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

        fetch(url, options)
        .then(response => response.json())
        .then(response => setGames(response))
        .catch(err => console.error(err));
    }, []);





  return (
    <CardContext.Provider value = {{games}}>
        {props.children}
    </CardContext.Provider>
  )
}


export default CardContextProvider
import React, { useState } from 'react';
import '../../App.css';
import AllGames from '../cards/AllGames';
import CardContextProvider from '../context-api/CardContext';

function CurrentGames() {

    const [searchItem, setSearchItem] = useState('');

    const onChange = (e) => {
        e.preventDefault();
        setSearchItem(e.target.value);
    }


    return (
        <>
            <main className="main-sec-pages">
                <div className="main-container">
                    <div className="search-group input-group flex-nowrap">
                        <span className="input-group-text" id="search">
                            <i className="fas fa-search" />
                        </span>
                        <input type="search" value={searchItem} className="form-control" placeholder="OYUN AXTAR..." aria-label="OYUN AXTAR..." aria-describedby="search"
                        onChange={onChange} />
                    </div>
                </div>
            </main>

            <CardContextProvider>
              <AllGames searchedItem={searchItem} />
            </CardContextProvider>
        </>
    )
}

export default CurrentGames
import React, { useState, useEffect } from 'react';
import '../../App.css';
import '../main-section/MainSection.css';
import AllGames from '../cards/AllGames';
import CardContextProvider from '../context-api/CardContext';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpeg';

function CurrentGames() {

    const slider = [
        img1,
        img2,
        img3
    ]

    let [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = ++ slideIndex % slideIndex.length;
            setSlideIndex(nextSlide);
        }, 2000);
        return () => clearInterval(interval);
    }, [slideIndex]);

    console.log(img1)

    const [searchItem, setSearchItem] = useState('');

    const onChange = (e) => {
        e.preventDefault();
        setSearchItem(e.target.value);
    }


    return (
        <>
            <main className="main-sec-pages">
                <div className="main-container" style={{backgroundImage: "url(" + slider[slideIndex] + ")"}}>
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
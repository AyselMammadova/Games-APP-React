import React from 'react';
import '../main-section/MainSection.css'
import Search from '../search/Search';

function MainSectionPages(props) {
  return (
    <main className="main-sec-pages">
        <div className="main-container">
            <Search />
        </div>
    </main>
  )
}

export default MainSectionPages
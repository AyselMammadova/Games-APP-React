import React from 'react';
import '../main-section/MainSection.css'

function MainSectionPages() {
  return (
    <main className="main-sec-pages">
        <div className="main-container">
            <div className="search-group input-group flex-nowrap">
                <span className="input-group-text" id="search">
                    <i className="fas fa-search" />
                </span>
                <input type="search" className="form-control" placeholder="OYUN AXTAR..." aria-label="OYUN AXTAR..." aria-describedby="search" />
            </div>
        </div>
    </main>
  )
}

export default MainSectionPages
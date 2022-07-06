import React from 'react'

function MainSectionPages(props) {
  return (
    <main className="main-sec-pages">
        <div className="main-container" style={{backgroundImage: "url(" + props.slider + ")"}}>
            <div className="search-group input-group flex-nowrap">
                <span className="input-group-text" id="search">
                    <i className="fas fa-search" />
                </span>
                <input type="search" value={props.searchedItem} className="form-control" placeholder="OYUN AXTAR..." aria-label="OYUN AXTAR..." aria-describedby="search"
                onChange={props.onChange} />
            </div>
        </div>
    </main>
  )
}

export default MainSectionPages
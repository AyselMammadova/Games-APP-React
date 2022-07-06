import React, { useState } from 'react'


function Search() {

    const [searchItem, setSearchItem] = useState('');

    const onChange = (e) => {
        e.preventDefault();
        setSearchItem(e.target.value);
    }



    return (
        <div className="search-group input-group flex-nowrap">
            <span className="input-group-text" id="search">
                <i className="fas fa-search" />
            </span>
            <input type="search" value={searchItem} className="form-control" placeholder="OYUN AXTAR..." aria-label="OYUN AXTAR..." aria-describedby="search"
            onChange={onChange} />
        </div>
    )
}

export default Search
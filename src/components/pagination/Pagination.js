import React, { useEffect, useState } from 'react';
import './Pagination.css';

const Pagination = ({ pages, setCurrentPage, totalGames, indexOfLastGame }) =>  {

    const numPage = [];

    for(let i=1; i <= pages; i++) {
        numPage.push(i);
    }

    const [activePage, setActivePage] = useState(1);

    useEffect(()=> {
        setCurrentPage(activePage)
    }, [activePage, setCurrentPage])





  

  return (
    <div className="pagination">
        <span className="d-inline-block showing">
            {totalGames} oyundan göstərilən oyun sayı {indexOfLastGame > totalGames ? totalGames : indexOfLastGame}
        </span>
        <ul className="d-flex flex-wrap align-items-center mb-0">
            <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
                <a href className="page-link"
                onClick = { () => setActivePage( (prev) => prev === 1 ? prev : prev - 1 ) }>
                    <i className="fas fa-angle-double-left" />
                </a>
            </li>

            {numPage.map((num, index) => 
                <li key={index} className={`page-item ${activePage === num ? 'active' : ''}`}>
                    <a href className="page-link"
                    onClick = { () => setActivePage(num) }>
                        {num}
                    </a>
                </li>
            )}

            <li className={`page-item ${activePage === numPage.length ? 'disabled' : ''}`}>
                <a href className="page-link"
                onClick = { () => setActivePage( (prev) => prev === numPage.length ? prev : prev + 1 ) }>
                    <i className="fas fa-angle-double-right" />
                </a>
            </li>
        </ul>
    </div>
  )

}

export default Pagination
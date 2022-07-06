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





    
    if((pages !== 1) && (pages !== 0)) {
        return (
            <div className="pagination">
                <span className="d-inline-block showing">
                    {totalGames} oyundan göstərilən oyun sayı {indexOfLastGame > totalGames ? totalGames : indexOfLastGame}
                </span>
                <ul className="d-flex flex-wrap align-items-center mb-0">
                    <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
                        <button role="link" className="page-link"
                        onClick = { () => setActivePage( (prev) => prev === 1 ? prev : prev - 1 ) }>
                            <i className="fas fa-angle-double-left" />
                        </button>
                    </li>

                    {numPage.map((num, index) => 
                        <li key={index} className={`page-item ${activePage === num ? 'active' : ''}`}>
                            <button role="link" className="page-link"
                            onClick = { () => setActivePage(num) }>
                                {num}
                            </button>
                        </li>
                    )}

                    <li className={`page-item ${activePage === numPage.length ? 'disabled' : ''}`}>
                        <button role="link" className="page-link"
                        onClick = { () => setActivePage( (prev) => prev === numPage.length ? prev : prev + 1 ) }>
                            <i className="fas fa-angle-double-right" />
                        </button>
                    </li>
                </ul>
            </div>
        )
    } 
    else if(pages === 0) {
        return(
            <p className='text-center' style={{color: '#01b36b', padding: '50px 0', fontSize: '32px'}}>Oyun tapılmadı 
                <i className="far fa-frown ms-2"></i>
            </p>
        )
    }

}

export default Pagination
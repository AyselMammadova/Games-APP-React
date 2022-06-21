import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import logo from "../img/console.png"

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);
   

  return (
    <>
        <header>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Games <img src={logo} alt='logo'/>

                    </Link> 

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Ana səhifə
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/current-games' className='nav-links' onClick={closeMobileMenu}>
                                Mövcud oyunlar
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/upcoming-games' className='nav-links' onClick={closeMobileMenu}>
                                Gələcək oyunlar
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Qeydiyyat
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Qeydiyyat</Button>}
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar
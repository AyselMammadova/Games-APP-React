import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { Button } from '../button/Button';
import logo from "../../img/console.png"

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

    // window location href
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname;

   

  return (
    <>
        <header>
            <div className='container'>
                <nav className='custom-navbar w-100'>

                    <Link to='/Games-APP-React/' className='navbar-logo me-auto' onClick={closeMobileMenu}>
                    Games <img src={logo} alt='logo'/>

                    </Link> 

                    <div className='menu-icon ms-auto' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='custom-nav-item'>
                            <Link to='/Games-APP-React/' className={`nav-links ${splitLocation === '/Games-APP-React/' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                Ana səhifə
                            </Link>
                        </li>
                        <li className='custom-nav-item'>
                            <Link to='/current-games' className={`nav-links ${splitLocation === '/current-games' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                Mövcud oyunlar
                            </Link>
                        </li>
                        <li className='custom-nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Qeydiyyat
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Qeydiyyat</Button>}
               
                </nav>
            </div>
        </header>
    </>
  )
}

export default Navbar
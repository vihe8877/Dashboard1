import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className = 'navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMoblieMenu}>
                        GRILLIC <i class="fa-solid fa-utensils"/>
                        {/* <img src={'public\Grillic_logo-removebg-preview.png'}
                        loading="lazy" style={{ width: "40px", height: "40px" }} alt="" /> */}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'name-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/homeboard' className = 'nav-links' onClick={closeMoblieMenu}>
                                Homeboard
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/profile' className = 'nav-links' onClick={closeMoblieMenu}>
                                Profile
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/sign-up' className = 'nav-links-mobile' onClick={closeMoblieMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
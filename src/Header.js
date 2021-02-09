import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({active}) => {
    return (
        <div className='header'>
            <ul>
                <Link to='/'>
                    <li className={active === 'home' && 'header__home--active'}  >Home</li>
                </Link>
                <Link to='/portfolio'>
                    <li className={active === 'portfolio' && 'header__portfolio--active'}>Portfolio</li>
                </Link>
                <Link to='/about'>
                    <li className={active === 'about' && 'header__about--active'}>About</li>
                </Link>
            </ul>
            <h1>Stephen Ibanez</h1>
            <div className="links">
                
            </div>
            {/* grab social media icons */}
            {/* <img className='header__image'/> */}
        </div>
    );
}

export default Header;

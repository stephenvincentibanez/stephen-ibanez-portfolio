import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineLinkedin} from 'react-icons/ai'
import {RiMediumLine} from 'react-icons/ri'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

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
                <a href='https://www.linkedin.com/in/stephen-ibanez-780b57b0/'>
                    <AiOutlineLinkedin/>
                </a>
                <a href='https://github.com/stephenvincentibanez'>
                    <AiFillGithub/>
                </a>
                <a href='mailto: stephenvincentibanez@gmail.com'>
                    <AiOutlineMail/>
                </a>
                <a href='https://stephenvincentibanez.medium.com/'>
                    <RiMediumLine/>
                </a>
            </div>
            {/* grab social media icons */}
            {/* <img className='header__image'/> */}
        </div>
    );
}

export default Header;

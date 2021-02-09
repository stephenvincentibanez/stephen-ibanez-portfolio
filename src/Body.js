import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css'

const Body = () => {
    return (
        <div className='body'>
            <img
                className='body__background' 
                src='https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg' 
                alt=''/>
            <div className='body__aboutMe'>
                <img 
                    src='https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png' 
                    alt=''/>
                <div className='body__info'>
                    <h1>Stephen Ibanez</h1>
                    <p>I'm a software engineer</p>
                </div>
            </div>
            <div className='body__viewPortfolio'>
                <Link to='/portfolio'>
                    <button>View Portfolio</button>
                </Link>
            </div>
        </div>
    );
}

export default Body;

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
                    src='https://i.postimg.cc/Qdtj2Kjw/IMG-3189.jpg' 
                    alt=''/>
                <div className='body__info'>
                    <h1>Stephen Ibanez</h1>
                    <h5>Software Engineer/Front-End Developer</h5>
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

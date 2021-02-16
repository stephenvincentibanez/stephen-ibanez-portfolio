import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css'

const Body = () => {
    return (
        <div className='body'>
            <div className='body__aboutMe'>
                <img 
                    src={process.env.PUBLIC_URL + '/IMG_3392 copy.jpeg'}
                    alt=''/>
                <div className='body__info'>
                    <h1>Stephen Ibanez</h1>
                    <h5>Software Engineer</h5>
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

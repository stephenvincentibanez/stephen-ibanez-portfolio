import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <img
                className='about__background' 
                src='https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg' 
                alt=''/>
            <div className='about__info'>
                <a target='_blank' href='https://docs.google.com/document/d/1S2tPMq-6yKgEf5cvXT7OD6A_xkf0PGzP5EUjwWLc308/edit'>
                    <img
                        className='about__resume'
                        src='https://i.postimg.cc/CKmgQBfd/Stephen-Ibanez-Resume-Feb-2021.png'
                    />
                </a>
                <div className='about__bio'>
                    <h1 className='about__header'>Hello World!</h1>
                    <h3>I'm a full-stack software engineer with a passion for front-end development. </h3>
                    {/* <h5>I'm experienced in Javascript, React, Ruby on Rails, HTML, and CSS</h5> */}
                    <h5>As a people person, I love collaborating in teams</h5>
                </div>
            </div>
            <p></p>
        </div>
    );
}

export default About;

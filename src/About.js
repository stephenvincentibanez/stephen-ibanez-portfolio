import React from 'react';
import './About.css'

const About = () => {

    return (
        <div className='about'>
            <div className='about__info'>
                <a target='_blank' href='https://docs.google.com/document/d/1S2tPMq-6yKgEf5cvXT7OD6A_xkf0PGzP5EUjwWLc308/edit?usp=sharing'>
                    <img
                        className='about__resume'
                        src={process.env.PUBLIC_URL + '/Stephen-Ibanez-Resume-Feb-2021.png'}
                    />
                </a>
                <div className='about__bio'>
                    <h1 className='about__header'>Hello, World!</h1>
                    <h3>I'm a full-stack software engineer with experience in Javascript, React, Ruby on Rails, CSS, and HTML. </h3>
                    <h5>As a people person, I love working in collaborative environments where I can apply my creativity and problem solving skills. I'm a natural communicator, with a strong belief that clear communication is the core of any successful team. </h5>
                    <h5>Outside of programming, I enjoy pursuing other creative endeavors like producing/recording music and drawing. I love to stay active, hiking around the PNW and indulging in a newfound love for basketball. </h5>
                    <div className='about__resume_mobile'>
                        <a target='_blank' href='https://docs.google.com/document/d/1S2tPMq-6yKgEf5cvXT7OD6A_xkf0PGzP5EUjwWLc308/edit?usp=sharing'>
                            <h1>Click for Resume</h1>
                        </a>
                    </div>
                </div>
            </div>
            <p></p>
        </div>
    );
}

export default About;

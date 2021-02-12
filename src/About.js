import React from 'react';
import './About.css'
// import { Document } from 'react-pdf'

const About = () => {
    return (
        <div className='about'>
            {/* <img
                className='about__background' 
                src='https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg' 
                alt=''/> */}
            <div className='about__info'>
                <a target='_blank' href='https://docs.google.com/document/d/1S2tPMq-6yKgEf5cvXT7OD6A_xkf0PGzP5EUjwWLc308/edit'>
                    <img
                        className='about__resume'
                        src='https://i.postimg.cc/CKmgQBfd/Stephen-Ibanez-Resume-Feb-2021.png'
                    />
                    {/* <Document file='public/Stephen Ibanez Resume Feb 2021.pdf'/> */}
                </a>
                <div className='about__bio'>
                    <h1 className='about__header'>Hello World!</h1>
                    <h3>I'm a full-stack software engineer with experience in Javascript, React, Ruby on Rails, CSS, and HTML. </h3>
                    <h5>As a people person, I love working in collaborative environments where I can apply my creativity and problem solving skills. I'm a natural communicator, with a strong belief that strong communication is the core of any successful project. </h5>
                    <h5>Outside of programming, I enjoy pursuing other creative endeavors like producing/recording music and drawing. I love to stay active, hiking around the PNW and indulging in a newfound love for basketball. </h5>
                </div>
            </div>
            <p></p>
        </div>
    );
}

export default About;

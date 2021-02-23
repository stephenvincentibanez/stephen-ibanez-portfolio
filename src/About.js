import React from 'react';
import './About.css'
import {Modal, Button} from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable={true}
        dialogClassName="my-modal"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <div className='modal'>
            <h3>Stephen Vincent Ibanez Jr.</h3>
            <h3>Shoreline, WA 98155 | 203-448-6264 | stephenvincentibanez@gmail.com</h3>
            <h4>Technical Skills</h4>
            <p>
            React, Javascript, Ruby, Rails, React Bootstrap, ActiveRecord, HTML, CSS, SQL, SQLite, PostgreSQL, Github.
            </p>
            <h4>Technical Projects</h4>
            <p>
            MovieMagick - Flatiron School capstone project. A movie browsing app that helps you keep track of movies you have seen through reviews and movies you want to see through a watchlist. 
            Explored ReactRouter in order to create my first multiple page React application.
            Utilized OMDB API to seed data and enable a user to send search queries to their API.
            Applied everything I learned in the Flatiron curriculum to create a full-stack app with a Rails backend and React frontend.
            </p>
            <p>
            ApartmentFindr - An apartment finding app that helps you browse listings by neighborhood and price range. Can keep track of listings you have seen by liking or disliking them to make your apartment hunt simpler.
            Expanded my understanding of maintaining state and passing props in a complex app using React.
            Explored React Bootstrap components to create a user-friendly UI experience.
            Acquired seed data with a custom-built web scraping program using Watir and Nokogiri.
            </p>
            <p>
            SAMtify - A music browsing/streaming app in which users can browse music by artists, songs, and playlists. Users can create their own playlists and favorite other users’ playlists. Can favorite other users’ playlists and subscribe to artists. Can sort songs/artists/playlists by popularity or alphabetically.
            Practice building and using Rails model relationships with ActiveRecord.
            Communicated with the Spotify API to seed our artist and song data.
            Explored CSS to create a visually appealing application
            </p>
           

            EXPERIENCE
            Whittier Kids  	Seattle, WA
            Lead Teacher 	       09/2018 - 05/2020
            Planned, implemented and led activities in a high quality, licensed education program.
            Maintained standards for children using non-punitive methods that encourage self-regulation while supporting children’s self esteem, promoting mutual respect, and modeling problem-solving skills.

            Kaffeeklatsch 	Seattle, WA
            Barista/FOH 	       03/2018 - 08/2018
            Created a warm and welcoming customer service experience for customers of the cafe.

            EDUCATION
            Flatiron School 	Seattle, WA
            Full Stack Web Development, Ruby on Rails and Javascript/React program 	10/2020 - 01/2021

            Virginia Polytechnic Institute and State University 	Blacksburg, VA
            Bachelor of Science in Marketing Management  	08/2012 - 08/2016
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  

const About = () => {
    const [modalShow, setModalShow] = React.useState(false);

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
                    {/* <div className='about__resume_mobile'>
                        <a target='_blank' href='https://docs.google.com/document/d/1S2tPMq-6yKgEf5cvXT7OD6A_xkf0PGzP5EUjwWLc308/edit?usp=sharing'>
                            <h1>Click for Resume</h1>
                        </a>
                    </div> */}
                    <div className='about__resume_mobile' onClick={() => setModalShow(true)}>
                            <h1>Click for Resume</h1>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
            <p></p>
        </div>
    );
}

export default About;

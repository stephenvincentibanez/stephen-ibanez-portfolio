// import React from 'react';
import Project from './Project'
import React, {useEffect, useState} from 'react'
import './Portfolio.css' 
import db from './firebase';

const Portfolio = () => {
    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     db.collection('projects').onSnapshot((snapshot) => {
    //             setProjects(
    //                 snapshot.docs.map((doc) => (
    //                     {
    //                         projectName: doc.data().projectName,
    //                         projectUrl: doc.data().projectUrl,
    //                         projectImg: doc.data().projectImg
    //                     }
    //                 ))
    //             )
    //         })
    // }, [])

    return (
        <div className="portfolio">
             <img
                className='portfolio__background' 
                src='https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg' 
                alt=''/>
            <div className='portfolio__projects'>
                {/* {
                    projects.map(project => (
                        <div className='portfolio__project'>
                            <Project 
                                projectName={project.projectName} 
                                projectImg={project.projectImg} 
                                projectUrl={project.projecUrl}/>
                        </div>

                    ))
                } */}
                <div className='portfolio__project'>
                    <Project 
                        projectName='ApartmentFindr' 
                        projectImg='https://i.postimg.cc/cJp41N6S/Screen-Shot-2021-02-09-at-5-14-39-PM.png' 
                        projectUrl='http://apartment-findr.herokuapp.com/'/>
                </div>
            </div>
            
        </div>
    );
}

export default Portfolio;

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
             {/* <img
                className='portfolio__background' 
                src='https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg' 
                alt=''/> */}
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
                        // projectImg={process.env.PUBLIC_URL + '/ApartmentFindrLanding.png'}  
                        projectImg={process.env.PUBLIC_URL + '/ApartmentFindrBrowse.png'}  
                        projectUrl='http://apartment-findr.herokuapp.com/'
                    />
                </div>
                <div className='portfolio__project'>
                    <Project
                        projectName='SAMtify'
                        projectImg={process.env.PUBLIC_URL + '/SamtifyHome4.png'}
                        projectUrl='https://youtu.be/Yh0P6Iz1Acc'
                    />
                </div>
                <div className='portfolio__project'>
                    <Project
                        projectName='MovieMagick'
                        projectImg={process.env.PUBLIC_URL + '/MovieMagickBrowse.png'}
                        projectUrl='https://youtu.be/sxl3xLHe2H4?start=4310&end=4994'
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Portfolio;

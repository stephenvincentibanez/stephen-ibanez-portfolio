import Project from './Project'
import React, {useEffect, useState} from 'react'
import './Portfolio.css' 
import db from './firebase';

const Portfolio = () => {

    return (
        <div className="portfolio">
            <div className='portfolio__projects'>
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

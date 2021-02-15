import React from 'react';
import BlogPost from './BlogPost';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className='blog__posts'>
                <div className='blog__post'>
                    <BlogPost
                        blogName='Using LocalStorage in Your React Application'
                        blogUrl='https://stephenvincentibanez.medium.com/using-localstorage-in-your-react-application-17f8541b2fc5' 
                    />
                </div>
                <div className='blog__post'>
                    <BlogPost
                        blogName='An Introduction to Hooks in React'
                        blogUrl='https://stephenvincentibanez.medium.com/an-introduction-to-hooks-in-react-41990629f066' 
                    />
                </div>
                <div className='blog__post'>
                    <BlogPost
                        blogName='Javascript innerText vs. innerHTML vs. textContent'
                        blogUrl='https://stephenvincentibanez.medium.com/javascript-innertext-vs-innerhtml-vs-textcontent-c77336dda9b5' 
                    />
                </div>
                <div className='blog__post'>
                    <BlogPost
                        blogName='Beautify: CSS Basics and Essentials'
                        blogUrl='https://stephenvincentibanez.medium.com/beautify-css-basics-and-essentials-33b0e4c0596c' 
                    />
                </div>
                <div className='blog__post'>
                    <BlogPost
                        blogName='The Push and Pull of Music and Technology'
                        blogUrl='https://stephenvincentibanez.medium.com/the-push-and-pull-of-music-and-technology-cf6a7881a987' 
                    />
                </div>
            </div>
        </div>
    );
}

export default Blog;

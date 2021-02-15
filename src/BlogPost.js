import React from 'react';
import './Blog.css'

const BlogPost = ({blogUrl, blogName}) => {
    return (
        <a href={blogUrl} target='_blank'>
            <div className='blog__post'>
                <h1>{blogName}</h1>
            </div>
        </a>
    );
}

export default BlogPost;

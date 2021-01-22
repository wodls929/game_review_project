import React from 'react';
import './PostContainer.css';

function PostContainer ({children}){
    return (
        <div className="PostContainer">
            {children}
        </div>
    );
}

export default PostContainer;
import React from 'react';
import './Post.css';
import  Avatar from '@material-ui/core/Avatar';

function post({username, caption, imageURL}) {
  return (
    <div className="post">
        <div className="post__header">
        <Avatar
            className='post__avatar'
            alt="abc123"
            src="/static/images/avatar/1.jpg"
         />
        <h3>{username}</h3>
        </div>
        {/*header = profile picture + username*/}
        <img className='post__image' src={imageURL} alt=''></img>

        {/*image*/}

        
        
        {/*username + caption*/}
        <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
    </div>
  )
}

export default post
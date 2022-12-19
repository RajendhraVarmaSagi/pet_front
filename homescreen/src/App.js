//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
// import { useState } from 'react';
import './App.css';
import Post from './Post';
//import {variable for database} from {database file created}



function App() {

  const [posts, setPosts]=useState([
    {
      username: "abc123", 
      caption:"one step at a time",
      imageURL:"https://images.pexels.com/photos/14491698/pexels-photo-14491698.jpeg"
    },
    {
      username: "abc123", 
      caption:"one step at a time",
      imageURL:"https://images.pexels.com/photos/14491698/pexels-photo-14491698.jpeg"
    }, // this has to be removed after the connection from the database
    
  ]);

  const [open, setOpen] = useState(false); // login screen

  //UseEffect runs a piece of code on a specific condition
  useEffect(() => {
    /*db.collection('posts').onSnapShot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
      //pulls the data from the database at the back 
      //if you want to pull the ids for individual person sepreately, 
    })  */
  }, [posts]) ;

  return (
    <div className="petworld">
        <Modal // login screen
          open={open}
          onClose={() => setOpen(false)}
        >
          <div style={modalStyle} className={classes.paper}>
          <h2>Hello, I am a modal</h2>
      </div>
        </Modal>
      <div className='petworld__header'>
      <img 
      className='petworld__headerImage'
      src="download5.png" alt="logo1" width="50" height= "50"></img>
        </div>
        <h1>Hello World</h1>
        
        {
          posts.map(({id, post}) => (
            <Post key={id} username={post.username} caption={post.caption} imageURL={post.imageURL} />
          ))
        }
    </div>
  );
}

export default App;

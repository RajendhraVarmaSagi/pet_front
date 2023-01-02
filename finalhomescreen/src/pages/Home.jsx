import React, { useEffect, useState } from 'react';
import axios from "axios";
import Feed from "../component/Feed";
import Header from "../component/Header";



 function Home() {
  const [cards, setCards] = useState({});
  // const arr = [];
  //var postID = cards._id;  
  // const [postsID, setPostsID] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  const url = "https://2976-2601-441-4200-d9a0-10da-6d62-ae9a-4d95.ngrok.io/feed/getFeedForUser/frankgray/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmcmFua2dyYXkiLCJleHAiOjE2NzI2NTUxNzl9.9wi8YAxNz0X3SsHpHFOBo9aGu118UPfj1sJOLLZa1e8";
  axios.get(url).then(response => {
    //console.log(response.data);
    //setPostsID(response.data);
    response.data.forEach(postID => {
      //console.log(postID);
      const postURL = `https://2976-2601-441-4200-d9a0-10da-6d62-ae9a-4d95.ngrok.io/post/getPost?postID=${postID}`;
      axios.get(postURL).then(res => {
        //console.log(res.data);
        setPosts((prevState) => [...prevState, {[postID]: res.data }])
      })
    })
  })
 
}, []) 

  return (
    <div className="container">
      <div className="header border-bottom">
        <Header />
      </div>
      <div className="feeds">

        {/* <p>Total Posts: {posts.length}</p> */}

{
  posts.map(function (post, index) {
    // console.log(post);
    return (
      <div key={index}>
        {
          Object.keys(post).map(function (postObj, index2) {
            return (
              <>
                <Feed key={index2} postID={post[postObj]._id} userID={post[postObj].userID} title={post[postObj].title} />
                {/* <p>ID: {post[postObj]._id}</p> */}
               {/* <p>User ID: {post[postObj].userID}</p> */}
               {/* <p>Title: {post[postObj].title}</p> */}
               {/* <p>File: {post[postObj].file}</p> */}
              </>
            )
          })
        }
      </div>
    )
  })
}
      
      {/* {cards.map(({ id}) => (
              <Feed key={id} />
      ))} */}

        {/* <Feed feedImage="feed-1.jpeg" />
        <Feed feedImage="feed-2.jpg" />
        <Feed feedImage="feed-3.jpg" /> */}
      </div>
    </div>
  );
}


export default Home;
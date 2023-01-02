import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

function Feed({userID, title, postID}) {
  // let [image, setImage] = React.useState(null);

  let imageURL = `https://2976-2601-441-4200-d9a0-10da-6d62-ae9a-4d95.ngrok.io/post/getPostImage?postID=`;


  // React.useEffect(() => {
  //   let imageURL = `https://2976-2601-441-4200-d9a0-10da-6d62-ae9a-4d95.ngrok.io/post/getPostImage?postID=${postID}`;

  //   axios.get(imageURL).then(response => setImage(response.data));
  // }, [])


  return (
    <div className="feed-item border-bottom">
      <div className="feed-header border-bottom">
        <div className="profile-section">
          <img
            src={`${imageURL}${postID}`}
            // src="images/profile-image.jpg"
            className="profile-image"
            alt=""
          />
        </div>

        <div className="username">
          <Link to="/profile">{userID} </Link>
        </div>
      </div>

      <div className="feed-image">
        <img src={`${imageURL}${postID}`} alt="Feeds" />
      </div>

      <div className="caption">
        <p>

    {userID} {" "}
          {title}
        </p>
      </div>
    </div>
  );
}

export default Feed;
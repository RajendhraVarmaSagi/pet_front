import React from "react";

function Follow({ buttonText, textColor, bgColor }) {
  return (
    <div className="follow-item border-bottom">
      <div className="follow-left-section">
        <img src="images/profile-image.jpg" className="profile-image" alt="" />

        <div className="username">
          <span>user_name</span>
          <br />
          <span className="fullName">full_name</span>
        </div>
      </div>

      <div>
        <button
          className="btn" style={{ color: textColor, backgroundColor: bgColor }}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Follow;

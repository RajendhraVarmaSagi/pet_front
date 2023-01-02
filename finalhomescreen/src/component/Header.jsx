import React from "react";
import { Link } from "react-router-dom";

/* ICONS */
import { CgProfile } from "react-icons/cg";
import { RiLoginCircleLine } from "react-icons/ri";

function Header() {
  return (
    <>
      <div className="logo-section">
        <Link to="/">
          <img src="images/logo.png" className="logo" alt="Logo" />
        </Link>
      </div>

      <div className="icons">
        <Link to="/login">
          <RiLoginCircleLine className="icon-color" />
        </Link>{" "}
        <Link to="/profile">
          <CgProfile className="icon-color" />
        </Link>
      </div>
    </>
  );
}

export default Header;

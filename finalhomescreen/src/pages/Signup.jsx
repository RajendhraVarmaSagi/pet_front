import React from "react";
import { Link } from "react-router-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";

function Signup() {
  return (
    <div className="container full-height">
      <div className="header border-bottom">
        <Header />
      </div>

      <div className="form-section">
        <div className="section-1">
          <form>
            <input type="text" placeholder="Mobile Number or email" />

            <input type="text" placeholder="Full Name" />

            <input type="text" placeholder="Username" />

            <input type="password" placeholder="Password" />

            <button>Sign up</button>
          </form>
        </div>

        <div className="section-1" style={{ marginTop: "20px" }}>
          <p className="forgot">
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>

      <Footer marginTop="160px" />
    </div>
  );
}

export default Signup;

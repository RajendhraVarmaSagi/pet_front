import React from "react";
import { Link } from "react-router-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";

function Login() {
  return (
    <div className="container full-height">
      <div className="header border-bottom">
        <Header />
      </div>

      <div className="form-section">
        <div className="section-1">
          <form>
            <input type="text" placeholder="Mobile number, username or email" />

            <input type="password" placeholder="Password" />

            <button>Log in</button>
          </form>

          {/* <div className="forgot">
            <Link to="/">Forgot password?</Link>
          </div> */}
        </div>

        <div className="section-1" style={{ marginTop: "20px" }}>
          <p className="forgot">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>

      <Footer marginTop="240px" />
    </div>
  );
}

export default Login;

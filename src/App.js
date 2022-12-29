import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Userprofile from './components/UserProfile'
import RegistrationForm from './components/registrationForm'
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Register from './components/Register';
// import { Routes } from 'react-router-dom';

function userprofile() {
  // Get the userId param from the URL.
  let { id } = useParams();
  // ...
}

function App() {
  const [current_user_data, set_current_user_data] = useState({});
    return (
      // <Router>
      <div className="App">
        <Header/>
        <h3>Login screen</h3>
        {/* <Register/> */}
        {/* <RegistrationForm/> */}
        {/* <h2>Welcome to React Router Tutorial</h2> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          {/* <li><Link to={'/'} className="nav-link"> Home </Link></li> */}
          <li><Link to={'/Register'} className="nav-link">Register</Link></li>
          <li><Link to={'/Userprofile'} className="nav-link">Profile</Link></li>
          {/* <li><Link to={'/about'} className="nav-link">About</Link></li> */}
        </ul>
        </nav>
        <hr />
        <Routes>
            {/* <Route exact path='/' component={Home} /> */}
            <Route path='/Register' element={<RegistrationForm/>} />
            {/* <Route path='/Userprofile' element={<Userprofile/>} /> */}
            <Route path='/Userprofile' element={<Userprofile/>} />
            {/* <Route path='/about' component={About} /> */}
        </Routes>
      </div>
      // </Router>
      
    );
  }

export default App;


// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <RegistrationForm/>
//     </div>
//   );
// }

// export default App;
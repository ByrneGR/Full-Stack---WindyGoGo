import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div>
      <p>{currentUser.first_name}</p>
      <button className="navbtn" onClick={logout}>Log Out</button>
    </div>) : (
      <div className="nav-right">
        <Link className="navbtn" to="/login">Start a Campaign</Link>
        &nbsp;&nbsp; 
        <div id="divider"></div>
           &nbsp;&nbsp; 
        <a className="navbtn" id="login-btn" onClick={() => openModal('login')}>Log In</a>
        &nbsp;&nbsp; 
        <a className="navbtn" onClick={() => openModal('signup')}>Sign Up</a>
      </div>
    );

  return (
    <div>
      {display}
    </div>
  )
}

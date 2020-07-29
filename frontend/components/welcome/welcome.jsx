import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.email}</p>
      <button onClick={logout}>Log Out</button>
    </div>) : (
      <div>
        <Link className="navbtn" to="/login">Start a Campaign</Link>
        &nbsp;&nbsp; 
        <button className="navbtn" onClick={() => openModal('login')}>Log In</button>
        &nbsp;&nbsp; 
        <button className="navbtn" onClick={() => openModal('signup')}>Sign Up</button>
      </div>
    );

  return (
    <div>
      {display}
    </div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.email}</p>
      <button onClick={logout}>Log Out</button>
    </div>) : (
      <div>
        <Link className="navbtn" to="/login">Start a Campaign</Link>
        &nbsp;&nbsp; 
        <Link className="navbtn" to="/login">Log In</Link>
        &nbsp;&nbsp; 
        <Link className="navbtn" to="/signup">Sign Up</Link>
      </div>
    );

  return (
    <div>
      {display}
    </div>
  )
}

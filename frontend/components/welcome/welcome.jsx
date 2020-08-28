import React from 'react';
import { Link, Route } from 'react-router-dom';
import CampaignFormContainer from '../campaign/campaign_form/campaign_form_container'

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div class="dropdown">
      <p className="navbtn" id="username_dropdown">{currentUser.first_name} </p>
      <div id="dropdown-items">
        <Link class="dropdown-links" to={`/api/campaigns/}`}>My_Campaigns</Link>
        <span onClick={logout}>Log Out</span>
      </div>
    </div>) : (
      <div>
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

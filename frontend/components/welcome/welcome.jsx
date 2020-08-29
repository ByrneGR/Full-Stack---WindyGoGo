import React from 'react';
import { Link, Route } from 'react-router-dom';
import CampaignFormContainer from '../campaign/campaign_form/campaign_form_container'

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div class="dropdown-trigger">
      <p className="navbtn" id="username_dropdown">{currentUser.first_name} </p>
      <ul id="dropdown-items">
        <li><Link class="dropdown-links" user={currentUser} to={`/api/${currentUser.id}/campaigns/`}>My Campaigns</Link></li>
        <li><Link class="dropdown-links" to={`/api/campaigns/}`}>My Contributions</Link></li>
        <li><Link class="dropdown-links" to={`/api/campaigns/}`}>Profile</Link></li>
        <li><span class="dropdown-links" onClick={logout}>Log Out</span></li>
      </ul>
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

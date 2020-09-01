import React from "react";
import { Link, Route } from 'react-router-dom';

class Profile extends React.Component {

  render() {
    return (

        <div id="profile-left">
          <h2 id="profile-firstname">{this.props.currentUser.first_name}</h2>
          <div id="profile-links">
            <Link class="dropdown-links" id="pink-link" to={`/api/individuals/${this.props.currentUser.id}`}>Profile</Link>
            <Link class="dropdown-links" user={this.props.currentUser} to={`/api/${this.props.currentUser.id}/campaigns/`}>Campaigns</Link>
          </div>
          <div id="profile-lower">
          <img className="profile-image" id="pinkrobot" src={window.pinkrobot} />

          <div id="profile-right">
            <h3 id="profile-aboutme">About Me</h3>
            <ul id="profile-list">
              <li id="profile-list-item"><span id="profile-count">{this.props.currentUser.campaigns.length} </span> Campaigns</li>
              <li id="profile-list-item"><span id="profile-count">{this.props.currentUser.contributions.length} </span> Contributions</li>
            </ul>
        </div>
        </div>  
      </div>
    )
  }

}

export default Profile;
  
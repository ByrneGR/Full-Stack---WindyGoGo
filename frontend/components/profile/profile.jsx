import React from "react";
import { Link, Route } from 'react-router-dom';

class Profile extends React.Component {

  render() {
    return (

        <div id="profile-left">
          <h2 id="profile-firstname">{this.props.currentUser.first_name}</h2>
          <div id="profile-links">
            <Link class="dropdown-links" to={`/api/individuals/${this.props.currentUser.id}`}>Profile</Link>
            <Link class="dropdown-links" user={this.props.currentUser} to={`/api/${this.props.currentUser.id}/campaigns/`}>My Campaigns</Link>
            <Link class="dropdown-links" to={`/api/campaigns/}`}>My Contributions</Link>
          </div>
          <div id="profile-lower">
          <img id="pinkrobot" src={window.pinkrobot} />

          <div id="profile-right">
            <h3>About Me</h3>
            <ul id="profile-list">
            <li>{this.props.currentUser.campaigns.length} Campaigns</li>
            <li>{this.props.currentUser.contributions.length} Contributions</li>
            </ul>
        </div>
        </div>  
      </div>
    )
  }

}

export default Profile;
  
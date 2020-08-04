import React from 'react';
import WelcomeContainer from "./welcome/welcome_container"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_utils';
import Modal from './modal/modal';
import CampaignFormContainer from './campaign/campaign_form/campaign_form_container'
import CampaignShowContainer from './campaign/campaign_show/campaign_show_container.jsx'



const App = () => (
  <div>
    <Modal />
    <header>
      <nav className="topnav">
        <div className="nav-left">
          <Link className="logo" to="/">
            WINDYGOGO
          </Link>
          <Link className="navbtn" to="/login">
            Explore
          </Link>
          <Link className="navbtn" to="/login">
            What We Do
          </Link>
        </div>
        <div className="nav-right">
          <Link className="navbtn" to="/start-a-campaign">Start a Campaign</Link>
        &nbsp;&nbsp;
        <div id="divider"></div>
        &nbsp;&nbsp;
        <WelcomeContainer />
        </div>       
      </nav>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path="/start-a-campaign" component={CampaignFormContainer} />
    <Route path="/api/campaigns/:campaignId" component={CampaignShowContainer} />
  </div>
);

export default App;
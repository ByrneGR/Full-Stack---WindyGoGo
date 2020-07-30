import React from 'react';
import WelcomeContainer from "./welcome/welcome_container"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_utils';
import Modal from './modal/modal';
import CampaignFormContainer from './campaign/campaign_form_container'



const App = () => (
  <div>
    <Modal />
    <header>
      <nav className="topnav">
    <div className="nav-left">
    <Link className="logo" to="/">WINDYGOGO</Link>
      <Link className="navbtn" to="/login">Explore</Link>
      <Link className="navbtn" to="/login">What We Do</Link>
    </div>
    <WelcomeContainer />
      </nav>
    </header>


    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />  
    <Route path="/start-a-campaign" component={CampaignFormContainer} />
 
  </div>
);

export default App;
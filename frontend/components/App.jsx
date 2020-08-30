import React from 'react';
import WelcomeContainer from "./welcome/welcome_container"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import { Link, Route, StaticRouter, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Modal from './modal/modal';
import CampaignFormContainer from './campaign/campaign_form/campaign_form_container'
import CampaignShowContainer from './campaign/campaign_show/campaign_show_container.jsx'
import ContributionFormContainer from './contribution/contribution_form_container'
import CampaignIndexContainer from './campaign/campaign_index/campaign_index_container.jsx'
import MyCampaignsContainer from './campaign/my_campaigns/my_campaigns_container.jsx'
import SplashPage from './splash/splash.jsx'
import PerkFormContainer from './perk/perk_form/perk_form_container.jsx'



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

    <Route exact path="/">
      <Redirect to="/home" />
    </Route>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/start-a-campaign" component={CampaignFormContainer} />
    <Route path="/api/campaigns/:campaignId" component={CampaignShowContainer} />
    <Route path='/contributions/:campaignId/new/:perkId' component={ContributionFormContainer}/>
    <Route path='/api/:userId/campaigns/' component={MyCampaignsContainer} />
    <Route path='/home' component={SplashPage} />
    <Route path="/perks/create/:campaignId" component={PerkFormContainer} />
    
  </div>
);

export default App;
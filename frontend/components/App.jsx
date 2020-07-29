import React from 'react';
import WelcomeContainer from "./welcome/welcome_container"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_utils';
import Modal from './modal/modal';



const App = () => (
  <div>
    <Modal />
    <header>
      <nav className="topnav">
    <div className="nav-left">
    <h1 className="logo">WINDYGOGO</h1>
      <Link className="navbtn" to="/login">Explore</Link>
      <Link className="navbtn" to="/login">What We Do</Link>
    </div>
    <WelcomeContainer />
      </nav>
    </header>


    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />  
 
  </div>
);

export default App;
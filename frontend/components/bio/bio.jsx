import React from "react";

import headshotv6 from "./headshotv6.jpeg";

class AboutMe extends React.Component {
  render() {

    return (
      <div>
        <div id="aboutme-container">
          <span id="aboutwindy-header-text">
            <img id="pinkrobot" src={window.pinkrobot} />
            <h1 id="aboutme-h1">About Windygogo</h1>
            <div id="aboutme-header-text">
            <span id="about-windy-text">Windygogo is a clone of the popular crowdfunding site, Indiegogo. The goal of WindyGoGo is to enhance my backend (Ruby on Rails) and frontend (React/Redux/CSS) skills by replicating an established successful web app and to showcase my abilitites as a developer. Windygogo is not intended for any commercial use.</span>
              </div>
          </span>

            <h1 id="aboutme-h1">About Me</h1>
          <div id="aboutme-header-text">
            <div  id="headshot-container">
              <img className="img-responsive" src={window.headshotv5} alt="d1"/>
            </div>
            <span id="about-me-bio">Hi there! My name is Gabe and I'm a software developer, growth marketer and music lover. I have built web applications with Javascript, React, and Ruby on Rails and I love testing my critical-thinking and creative problem-solving through writing code.<br></br><br></br>

I also have a background in digital marketing and managed advertising efforts at Industrious, a national coworking space provider and Ampush, an ad agency in San Francisco. Outside of work, I love going to concerts, making beats, and travelling to new places. Learn more at <a target="_blank" id="gb-link" href="https://www.gabebyrne.com">gabebyrne.com</a></span>

          </div>
        </div>

      </div>
    );
  }
}

export default AboutMe;
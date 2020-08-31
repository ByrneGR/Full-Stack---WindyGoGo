import React from "react";

class Footer extends React.Component {
  render() {
    return (
    <div className="helpful-information-banner-container">
      <div id="helpful-information-banner-parts">
      <div id="footer-container">
        <h1 className="footer-header">EXPLORE</h1>
        <span>What We Do</span>
        <span>Funding</span>
        <span>GoFundMe</span>
      </div>
      </div>
      <div id="helpful-information-banner-parts">
      <div id="footer-container">  
        <h1 className="footer-header">ABOUT</h1>
        <span>About Us</span>
        <span>Blog</span>
        <span>Trust and Safety</span>
        <span>Help and Support</span>
        <span>Press</span>
        <span>Careers</span>
        <span>Contact</span>
        </div>        
      </div>
      <div id="helpful-information-banner-parts">
        <div id="footer-container">   
          <h1 className="footer-header">ENTREPRENEURS</h1>
          <span>How It Works</span>
          <span>Indiegogo vs Kickstarter</span>
          <span>Education Center</span>
          <span>Experts Directory</span>
          <span>Fees</span>
          <span>Enterprise</span>
          <span>China</span>
        </div>  
      </div>
    </div>
    )
  }
}

export default Footer;
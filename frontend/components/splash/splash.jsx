import React from "react";
import Slider from "react-slick";
import gogoBanner1 from "./gogobanner1.jpg";
import gogoBanner2 from "./gogobanner2.jpeg";
import gogoBanner3 from "./gogobanner3.jpg";
import CampaignIndexContainer from '../campaign/campaign_index/campaign_index_container.jsx'

class SplashPage extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings}>
          <div>
            <img src={gogoBanner1} alt="d1" className="Dog" />
          </div>
          <div>
            <img src={gogoBanner2} alt="d1" className="Dog" />
          </div>
          <div>
            <img src={gogoBanner3} alt="d1" className="Dog" />
          </div>
        </Slider>
        <CampaignIndexContainer />

        <div className="helpful-information-banner-container">
          <div id="helpful-information-banner-parts">
            <h1>EXPLORE</h1>
              <span>What We Do</span>
              <span>Funding</span>
              <span>GoFundMe</span>
          </div>
          <div id="helpful-information-banner-parts">
            <h1>ABOUT</h1>
            <span>About Us</span>
            <span>Blog</span>
            <span>Trust and Safety</span>
            <span>Help and Support</span>
            <span>Press</span>
            <span>Careers</span>
            <span>Contact</span>
          </div>
          <div id="helpful-information-banner-parts">
            <h1>ENTREPRENEURS</h1>
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
    );
  }
}

export default SplashPage;

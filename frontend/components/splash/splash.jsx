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
            <img src={window.gogobanner1} alt="d1" className="Dog" />
          </div>
          <div>
            <img src={window.gogobanner2} alt="d1" className="Dog" />
          </div>
          <div>
            <img src={window.gogobanner3} alt="d1" className="Dog" />
          </div>
        </Slider>
        <CampaignIndexContainer />

      </div>
    );
  }
}

export default SplashPage;

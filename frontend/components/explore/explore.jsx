import React from "react";
import CampaignIndexContainer from '../campaign/campaign_index/campaign_index_container.jsx'

class Explore extends React.Component {
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
        <div id="explore-header-container">
          <span id="explore-header-text">
          <h1 id="explore-h1">Indiegogo Campaigns</h1>
            <h2 id="explore-h2">Fund new and groundbreaking projects, including hits from Indiegogo InDemand</h2>
          </span>
        </div>
        <CampaignIndexContainer />

      </div>
    );
  }
}

export default Explore;
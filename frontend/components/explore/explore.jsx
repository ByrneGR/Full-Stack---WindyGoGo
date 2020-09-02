import React from "react";
import CampaignIndexContainer2 from '../campaign/campaign_index/campaign_index_container2.jsx'

class Explore extends React.Component {
  render() {

    return (
      <div>
        <div id="explore-header-container">
          <span id="explore-header-text">
          <h1 id="explore-h1">Indiegogo Campaigns</h1>
            <h2 id="explore-h2">Fund new and groundbreaking projects, including hits from Indiegogo InDemand</h2>
          </span>
        </div>
        <CampaignIndexContainer2 />

      </div>
    );
  }
}

export default Explore;
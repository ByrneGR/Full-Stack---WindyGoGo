import React from 'react';
import { Link } from 'react-router-dom';
  

class CampaignIndex extends React.Component {
  constructor(props) {
    super(props) 
    
    this.state = this.props.campaigns
  }

  componentDidMount() {
    this.props.fetchCampaigns()
  }


  campaignRender() {

    if (this.props.campaigns) {
      let lastIndex = Object.values(this.props.campaigns).length - 1
      debugger
      return (
        <div className="homepage_parent">
          {Object.values(this.props.campaigns).slice(lastIndex - 8, lastIndex).map((campaign, idx) => (
            <Link to={`/api/campaigns/${campaign.id}`} className="homepage_container">
                <img className="homepage_images" src={campaign.photoUrl}/>
                <div id="homepage_lowertext">
                <span id="homepage_funding">FUNDING</span>
                <span className="homepage_title">{campaign.title}</span>
                <span className="homepage_description">{campaign.description}</span>
                </div>
            </Link>
          )
          )}
        </div>
      )
    } else {
      return null;
    }
  }


  // if(this.props.campaign.contributions) {
  //   return (
  //     <div>
  //       {this.props.campaign.contributions.map((contribution, idx) => (
  //         <li key={contribution.id}>{contribution.name_on_card} - {contribution.contribution_amount}</li>
  //       ))};
  //     </div >)
  // } else return null;
  // }



  render() {
    return(
      <div>
        <h1 id="popular_projects">Popular Projects</h1>
      {this.campaignRender()}
      </div >
    );
  }


}

export default CampaignIndex;
  
  
  
  

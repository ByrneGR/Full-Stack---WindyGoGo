import React from 'react';
import { Link } from 'react-router-dom';
  

class MyCampaigns extends React.Component {
  constructor(props) {
    super(props) 
    
    this.state = this.props.campaigns
  }

  componentDidMount() {
    this.props.fetchUserCampaigns(this.props.currentUser.id)
  }


  campaignRender() {

    if (this.props.campaigns) {
      let lastIndex = Object.values(this.props.campaigns).length - 1
      return (
        <div className="my_campaign_parent">
          {Object.values(this.props.campaigns).slice(lastIndex - 8, lastIndex).map((campaign, idx) => (
            <div className ="my-campaigns-campaign-container">
                <img className="my_campaign_images" src={campaign.photoUrl}/>
                  <div className="my-campaigns-details">
                    <Link to={`/api/campaigns/${campaign.id}`} className="my_campaigns_title">{campaign.title}</Link>
                <span className="my_campaigns_creatorparent">By <Link to={`/api/individuals/${campaign.creator.id}`} id="my_campaigns_creator">{campaign.creator.first_name} {campaign.creator.last_name}</Link></span>  
                  <span id="my_campaigns_tagline">{campaign.tagline}</span>
                  </div>
                  
            </div>
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
      <div class="my-campaigns-container-all">
        <h2 id="campaign-firstname">{this.props.currentUser.first_name}</h2>
        <div id="campaign-links">
          <Link class="dropdown-links" id="pink-link" to={`/api/individuals/${this.props.currentUser.id}`}>Profile</Link>
          <Link class="dropdown-links" user={this.props.currentUser} to={`/api/${this.props.currentUser.id}/campaigns/`}>Campaigns</Link>
          <Link class="dropdown-links" to={`/api/campaigns/}`}>Contributions</Link>
        </div>
        <h2 id="campaigns-im-on">Campaigns I'm On</h2>
      {this.campaignRender()}
      </div >
    );
  }


}

export default MyCampaigns;
  
  
  
  

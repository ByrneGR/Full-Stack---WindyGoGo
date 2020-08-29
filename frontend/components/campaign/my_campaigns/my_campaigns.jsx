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
      debugger
      return (
        <div className="my_campaign_parent">
          {Object.values(this.props.campaigns).slice(lastIndex - 8, lastIndex).map((campaign, idx) => (
            <div className ="my-campaigns-campaign-container">
                <img className="homepage_images" src={campaign.photoUrl}/>
                  <div className="my-campaigns-details">
                    <Link to={`/api/campaigns/${campaign.id}`} className="homepage_container">{campaign.title}</Link>
                    <span className="homepage_description">By {campaign.creator.first_name} {campaign.creator.last_name}</span>  
                    <span className="homepage_description">Campaign Id:{campaign.id}</span>  
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
        <h1 id="popular_projects">{this.props.currentUser.first_name}</h1>
        <h2>Campaigns I'm On</h2>
      {this.campaignRender()}
      </div >
    );
  }


}

export default MyCampaigns;
  
  
  
  

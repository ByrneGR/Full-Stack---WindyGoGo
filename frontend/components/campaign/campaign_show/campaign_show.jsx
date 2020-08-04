import React from 'react';

class CampaignShow extends React.Component {

  componentDidMount() {
    this.props.fetchCampaign(this.props.id)
  }
  
  campaignRender() {
    if (this.props.campaign) {
    return (
      <ul>
        <li key={this.props.id}>
          <img src={this.props.campaign.photoUrl}/> */}
          <div className="campaignshowheader">
            <span>{this.props.campaign.title}</span>
            <button>BACK IT</button>
          </div>
          <div className="campaignshowlower">
            <span>{this.props.campaign.description}</span>
          </div>
        </li>
      </ul>
    )
    } else {
      return null;
    }
  }

  render() {
    return (
    this.campaignRender()
    )
  }
}

export default CampaignShow;
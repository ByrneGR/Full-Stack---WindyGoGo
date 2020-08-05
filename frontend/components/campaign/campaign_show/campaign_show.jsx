import React from 'react';

class CampaignShow extends React.Component {

  componentDidMount() {
    this.props.fetchCampaign(this.props.id)
  }
  
  campaignRender() {
    debugger
    if (this.props.campaign) {
    return (
      <div id="campaignshowparent">
          <div id="campaignshowheader">
            <img src={this.props.campaign.photoUrl} />
            <div id="campaignshowheader-right">
              <span>{this.props.campaign.title}</span>
              <button>BACK IT</button>
              </div>
            </div>  
          <div id="campaignshowlower">
            <span>{this.props.campaign.description}</span>
          </div>
      </div>
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
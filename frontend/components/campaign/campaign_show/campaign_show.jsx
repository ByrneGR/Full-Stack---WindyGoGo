import React from 'react';
import { Link, Route } from 'react-router-dom';
import ContributionFormContainer from '../../contribution/contribution_form_container'

class CampaignShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.campaign
  }

  componentDidMount() {
    this.props.fetchCampaign(this.props.id)
  }
  
  campaignRender() {
    if (this.props.campaign) {
    return (
      <div id="campaignshowparent">
          <div id="campaignshowheader">
            <img src={this.props.campaign.photoUrl} />
            <div id="campaignshowheader-right">
              <span>{this.props.campaign.title}</span>
              <Link to={`/contributions/${this.props.campaign.id}/new`} campaign={this.props.campaign}>BACK IT</Link>              </div>
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
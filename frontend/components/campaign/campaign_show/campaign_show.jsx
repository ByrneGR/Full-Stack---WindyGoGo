import React from 'react';
import { Link, Route } from 'react-router-dom';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.campaign
  }

  componentDidMount() {
    this.props.fetchCampaign(this.props.id)
    // this.progressBar()
  }

  
  contributions() {

   if (this.props.campaign.contributions) {
     return(
    <div>
     {this.props.campaign.contributions.map((contribution, idx) => (
        <li key={contribution.id}>{contribution.name_on_card} - {contribution.contribution_amount}</li>
      ))};
      </div >)
    } else return null;
  }

  progressBar() {
    let progress = document.getElementById("progressbar")
    let percent = (this.props.campaign.amount_raised / this.props.campaign.funding_goal) * 100
    progress.style.width = percent + "%"
  }

  campaignRender() {

    if (this.props.campaign) {
    return (
      <div id="campaignshowparent">
          <div id="campaignshowheader">
            <img className="showpageimage" src={this.props.campaign.photoUrl} />
            <div className="space"></div>
            <div id="campaignshowheader-right">
              <span id="showpage_funding">FUNDING</span>
              <span id="showpage_title">{this.props.campaign.title}</span>
              <span id="showpage_description">{this.props.campaign.description}</span>
              <span id="showpage_creator">{this.props.campaign.creator.first_name} {this.props.campaign.creator.last_name}</span>
            <div id="raisedandbackers">
              <span id="showpage_amountraised">${this.props.campaign.amount_raised} USD</span>
              <span id="showpage_backers">{this.props.campaign.number_of_backers} backers</span>              
            </div> 
            <div class="progressbar_parent">
              <div id="progressbar"></div>
            </div>
            <span id="showpage_percent_raised">{this.props.campaign.percent_raised}% of ${this.props.campaign.funding_goal} Flexible Goal</span>       
            <Link className="btn-formp1" id="btn-backit" to={`/contributions/${this.props.campaign.id}/new`} campaign={this.props.campaign}>BACK IT</Link>
            </div>
            </div>  
          {/* <div id="campaignshowlower">
            <span>{this.props.campaign.description}</span>
            <ul>
              {this.contributions()}
            </ul>
          </div> */}
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
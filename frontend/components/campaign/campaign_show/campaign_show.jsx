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

  
  perks() {

   if (this.props.campaign.perks) {
     return(
    <div>
     {this.props.campaign.perks.map((perk, idx) => (
       <Link perk={perk} to={`/contributions/${this.props.campaign.id}/new/${perk.id}`} id="perk_card_link">
       <div className="perk-card-container">
         <h3 id="perk-card-header">{perk.title}</h3>
         <span id="perk-price" key={perk.id}>${perk.price} USD</span> <br></br><br></br>
         <span id="estimated_shipping">Estimated Shipping</span> <br></br>
         <span>{perk.delivery_date}</span> <br></br><br></br>
           <span>Only <span id="quantity_avail">{perk.quantity_available}</span> left</span> <br></br><br></br>
        </div>
        </Link>
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
          <div id="campaignshowlower">
            <div id="campaign-description">
              <h2 className="campaignshowlower-header">STORY</h2>
              <span id="campaign-description-body">{this.props.campaign.description}</span>
            </div>
            <ul id="perk-parent">
            <h2 className="campaignshowlower-header" >Select a perk</h2>
              {this.perks()}
            </ul>
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
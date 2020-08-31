import React from "react";

class ContributionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contribution_amount: 25,
      name_on_card: "Name on Card",
      card_number: "Demo Credit Card # (no input needed)",
      contribution_appearance: "Anonymous",
      perk_id: this.props.perkId,
      campaign_id: this.props.id,
    };
   this.handleSubmit = this.handleSubmit.bind(this); 
  }

  componentDidMount() {
    this.props.fetchCampaign(this.props.id)
    this.props.fetchPerk(this.props.perkId)
  }  


  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }  

  handleSubmit(e) {
    e.preventDefault();
    const contribution = Object.assign({}, this.state)
    this.props.createContribution({contribution})
      .then(document.location.href = `#/api/campaigns/${this.props.campaign.id}`);
  }

  header() {
    if (this.props.campaign) {
    return (
      <div className="contribution-form-headers">
        <span id="yourecontributing">You're contributing to</span>
        <h1 id="contributiontitleheader">
         {this.props.campaign.title}
        </h1>
      </div>
    )} else {
      return null;
    }
  } 

  perk() {
    const { perk } = this.props
    debugger
    if (perk) {
      return (
        <div className="contribution-perk-parent">
              <div className="contribution-perk-card-container">
                <div id="contribution-perk-top">
                <h2 id="review-contribution-heading">Review Your Contribution</h2>
               <span id="perk-card-header">{perk.title}</span><br></br>
                <span>{perk.description}</span><br></br>
                <span id="estimated_shipping">Estimated Shipping</span> <br></br>
                <span>{perk.delivery_date}</span> <br></br><br></br>
                </div>
                <div id="contribution-perk-bottom">
                  <span id="perk-price" key={perk.id}>{perk.title}        ${perk.price} USD</span> <br></br><br></br>
                  <span id="perk-price-total" key={perk.id}>Total        ${perk.price} USD</span> <br></br><br></br>
                </div> 
                <div id="contribution-button-container">
            <button
              className="btn-formp1 contribution-btn" id="campaignform2btn" onClick={this.handleSubmit}>Submit Payment</button> </div>
              </div>
        </div > )
    } else {
      return null }
  }

  contributionAmount() {
    return (
      <div>
        <label className="input-label_campaign">
          <h2 className="input-label_header">Contribution Amount</h2>
          <div id="nameandcardnumber-parent">
            <input
              className="form-field_campaign"
              id="contribution_amount"
              type="number"
              value={this.state.contribution_amount}
              onChange={this.handleInput("contribution_amount")}
            />
          </div>
      </label>   
      </div>
    )
  }
  
  nameAndCardInfo() {
    return(
    <div> 

    <label className="input-label_campaign">
      <h2 className="input-label_header">Debit or Credit Card</h2>
          <div id="nameandcardnumber-parent"> 
          <input
            className="form-field_campaign"
            id="contribution_nameoncard"
            type="text"
            value={this.state.name_on_card}
            onChange={this.handleInput("name_on_card")}
          />
   
          <input
            className="form-field_campaign"
            id="contribution_cardnumber"
            type="text"
            value={this.state.card_number}
            onChange={this.handleInput("card_number")}
          />
          </div>
      </label>   
    </div >
    )
  }

  contribution_appearance() {
    return (
      <div id="contribution_appearance">
        <h1 className="question-header1">Contribution Appearance</h1>
        <div className="campaign-radio">
          <input
            type="radio"
            name="contribution_appearance"
            id="full_name"
            value="Full Name"
            onChange={this.handleInput("contribution_appearance")}
          />
          <label htmlFor="full_name">Full Name</label>
          <input
            type="radio"
            name="contribution_appearance"
            id="anonymous"
            value="Anonymous"
            onChange={this.handleInput("contribution_appearance")}
          />
          <label htmlFor="anonymous">Anonymous</label>          
          </div>
      </div>
    );
  }





  render() {

    return (
      <div class="contribution-form-parent">

        <form id="contributionform">
      <div>{this.header()}</div>
        {this.contributionAmount()}
          {this.nameAndCardInfo()}
          {this.contribution_appearance()}
      </form>
      {this.perk()}
    </div >        
    )
  }
}

export default ContributionForm;


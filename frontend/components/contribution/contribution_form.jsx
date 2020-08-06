import React from "react";

class ContributionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contribution_amount: 25,
      name_on_card: "Name on Card",
      card_number: "Demo Credit Card # (no input needed)",
      contribution_appearance: "Anonymous",
      campaign_id: this.props.id
    };
   this.handleSubmit = this.handleSubmit.bind(this); 
  }

  componentDidMount() {
    this.props.fetchCampaign(this.props.id)
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
      <div className="form-headers">
        <h1 id="contributionformheader" className="campaign_form-header1">
         {this.props.campaign.title}
        </h1>
      </div>
    )} else {
      return null;
    }
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
      <div>
        <form id="contributionform">
      <div>{this.header()}</div>
        {this.contributionAmount()}
          {this.nameAndCardInfo()}
          {this.contribution_appearance()}
          <button
            className="btn-formp1" id="campaignform2btn" onClick={this.handleSubmit}>Submit Payment</button>
      </form>
      </div >
    )
  }
}

export default ContributionForm;


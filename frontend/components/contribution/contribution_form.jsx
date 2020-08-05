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
  }

  componentDidMount() {
    this.props.fetchCampaign(this.props.id)
  }  


  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }  

  header() {
    if (this.props.campaign) {
    return (
      <div className="form-headers">
        <h1 className="campaign_form-header1">
          Contributing to {this.props.campaign.title}
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
      <div>
        <h1 className="question-header1">Where is your bank?</h1>
        <p className="question-header2">
          Your bank account location determines the currency in which you can
          raise funds.
        </p>
        <select
          id="dropdown_list-bl"
          className="form-field_campaign"
          onChange={this.props.handleInput("contribution_appearance")}
        >
          <option
            id="dropdown_item_default"
            value=""
            className="location_dropdowns"
          >
            Select a bank country
          </option>
          <option
            id="dropdown_item0"
            value="United States"
            className="location_dropdowns"
          >
            United States
          </option>
          <option
            id="dropdown_item21"
            value="Other"
            className="location_dropdowns"
          >
            Other countries
          </option>
        </select>
      </div>
    );
  }





  render() {

    return (
      <div>
        <form>
      <div>{this.header()}</div>
        {this.contributionAmount()}
          {this.nameAndCardInfo()}
      </form>
      </div >
    )
  }
}

export default ContributionForm;


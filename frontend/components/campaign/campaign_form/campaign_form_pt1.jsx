import React, { Component } from "react";

export class CampaignFormPt1 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  header() {
    return (
      <div className="form-headers">
        <h1 className="campaign_form-header1">
          Let’s get ready to start your campaign!
        </h1>
        <div id="campaignsubheader">
        <span className="campaign_form-header2">
          We want to create the best onboarding for you – please fill out the
          information below.</span><span className="campaign_form-header2" id="boldcampaignheader">
          Your answers will be locked for this campaign and can’t be changed
          later.</span>
        </div>
      </div>
    );
  }

  creatorTypeSelect() {
    return (
      <div>
        <h1 className="question-header1">Who are you raising money for?</h1>
        <h2 className="question-header2">
          Please choose the type of account that will be receiving your funds.
        </h2>

        <div className="campaign-radio">
          <input
            type="radio"
            name="creator_type"
            id="individual"
            value="Individual"
            onChange={this.props.handleInput("creator_type")}
            checked
          />
          <label htmlFor="individual">Individual</label>
          <input
            type="radio"
            name="creator_type"
            id="business/nonprofit"
            value="Business/Nonprofit"
            onChange={this.props.handleInput("creator_type")}
          />
          <label htmlFor="business/nonprofit">Business or Nonprofit</label>
        </div>
      </div>
    );
  }

  location() {

    return (
      <div className="campaign-form-parent">
        <h1 className="question-header1">Where are you located?</h1>
        <p className="question-header2">
          If you are raising funds as an individual, what is your country of
          legal residence? If you are raising funds for a business, where is the
          business headquartered? Learn more about country limitations.
        </p>
        <select
          id="dropdown_list"
          className="form-field_campaign"
          onChange={this.props.handleInput("location")}
        >
          <option
            id="dropdown_item0"
            value="United States"
            className="location_dropdowns"
          >
            United States
          </option>
          <option
            id="dropdown_item1"
            value="Australia"
            className="location_dropdowns"
          >
            Australia
          </option>
          <option
            id="dropdown_item2"
            value="Austria"
            className="location_dropdowns"
          >
            Austria
          </option>
          <option
            id="dropdown_item3"
            value="Belgium"
            className="location_dropdowns"
          >
            Belgium
          </option>
          <option
            id="dropdown_item4"
            value="Canada"
            className="location_dropdowns"
          >
            Canada
          </option>
          <option
            id="dropdown_item5"
            value="Denmark"
            className="location_dropdowns"
          >
            Denmark
          </option>
          <option
            id="dropdown_item6"
            value="Finland"
            className="location_dropdowns"
          >
            Finland
          </option>
          <option
            id="dropdown_item7"
            value="France"
            className="location_dropdowns"
          >
            France
          </option>
          <option
            id="dropdown_item8"
            value="Germany"
            className="location_dropdowns"
          >
            Germany
          </option>
          <option
            id="dropdown_item9"
            value="Hong Kong"
            className="location_dropdowns"
          >
            Hong Kong
          </option>
          <option
            id="dropdown_item10"
            value="Ireland"
            className="location_dropdowns"
          >
            Ireland
          </option>
          <option
            id="dropdown_item11"
            value="Italy"
            className="location_dropdowns"
          >
            Italy
          </option>
          <option
            id="dropdown_item12"
            value="Luxembourg"
            className="location_dropdowns"
          >
            Luxembourg
          </option>
          <option
            id="dropdown_item13"
            value="Netherlands"
            className="location_dropdowns"
          >
            Netherlands
          </option>
          <option
            id="dropdown_item14"
            value="Norway"
            className="location_dropdowns"
          >
            Norway
          </option>
          <option
            id="dropdown_item15"
            value="Portugal"
            className="location_dropdowns"
          >
            Portugal
          </option>
          <option
            id="dropdown_item16"
            value="Singapore"
            className="location_dropdowns"
          >
            Singapore
          </option>
          <option
            id="dropdown_item17"
            value="Spain"
            className="location_dropdowns"
          >
            Spain
          </option>
          <option
            id="dropdown_item18"
            value="Sweden"
            className="location_dropdowns"
          >
            Sweden
          </option>
          <option
            id="dropdown_item19"
            value="Switzerland"
            className="location_dropdowns"
          >
            Switzerland
          </option>
          <option
            id="dropdown_item20"
            value="United Kingdom"
            className="location_dropdowns"
          >
            United Kingdom
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

  banking_location() {
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
          onChange={this.props.handleInput("banking_location")}
        >
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
    const { values, handleInput } = this.props;
    return (
      <div className="campaign-form-parent">
        <form className="campaign-form" id="campaign-form1">
          {this.header()}
          <div className="campaign-form-parent">
            {this.creatorTypeSelect()}
            <br></br>
            {this.location()}
            <br></br>
            {this.banking_location()}
          </div>
          <button id="btn-formp1" onClick={this.continue}>START MY CAMPAIGN</button>
        </form>
      </div>
    );
  }
}

export default CampaignFormPt1;

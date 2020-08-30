import React, { Component } from 'react'

export class PerkFormQuestions extends Component {
  render() {
    const errors = this.props.errors
    const { values, handleInput } = this.props;
    return (
      <div id="campaignformp2">
        <button
          className="btn-formp1" id="launch-top" onClick={this.props.handleSubmit}>ADD PERK</button>   
        <button
          className="btn-formp1" id="goback-top" onClick={this.props.prevStep}>BACK</button>                     
        <form
          onSubmit={this.createCampaign}
          className="campaign-form2-parent"
          id="campaign-form2"
        >
          <div className="campaign-form2-parent">
            <h1 className="form-header1" id="basics">Perk Details</h1>
            <p className="form-header2" id="basicsdescription">
              Perks are incentives offered to backers in exchange for their support. Make sure your perks are not 
              prohibited.
              Learn more about perks in the help center.            </p>
          </div>
          <div className="formpt2-inputs">
            <label className="input-label_campaign">
              <h2 className="input-label_header">Price</h2>
              <div className="sublabel">Set an amount that you want to collect from backers who claim this perk. This amount should represent how much you want to receive for all the items included in this perk.</div>
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.price}
                onChange={this.props.handleInput("price")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              <h2 className="input-label_header">Retail Price</h2>
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.retail_price}
                onChange={this.props.handleInput("retail_price")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              <h2 className="input-label_header">Title</h2>
              <div className="sublabel">The title for your perk is what will appear on your campaign page and throughout Indiegogo. Create a title that best describes the contents of what this perk is offering.
              </div>              
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.title}
                onChange={this.props.handleInput("title")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              <h2 className="input-label_header">Description</h2>
              <div className="sublabel">Describe the details of this perk. Be creative, this is your opportunity to educate backers on what they will be receiving after they claim this perk.
              </div>
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.description}
                onChange={this.props.handleInput("description")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              <h2 className="input-label_header">Quantity Available</h2>
              <div className="sublabel">You can limit the quantity available to backers based on production volume. Leaving this field blank indicates that there is no quantity limit.
              </div>              
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.quantity_available}
                onChange={this.props.handleInput("quantity_available")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              <h2 className="input-label_header">Estimated Delivery Date</h2>
              <div className="sublabel">Estimate a delivery date for this perk for your backers. This date and future changes to it will appear on the perk card for your backers to see. We recommend that you post an update to backers whenever you change this date.
              </div>
              <input
                className="form-field_campaign"
                type="text"
                id="funding_goal"
                value={this.props.values.delivery_date}
                onChange={this.props.handleInput("delivery_date")}
              />
            </label>
            <br></br>
            <button
              className="btn-formp1" id="campaignform2btn" onClick={this.props.handleSubmit}>ADD PERK</button>
            <div>{errors}</div>
          </div>
        </form>
      </div>
    );
  }

}

export default PerkFormQuestions;

import React, { Component } from 'react'

export class CampaignFormPt2 extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.createCampaign} className="modal-form" id="login-form">
          <div className="form-headers">
            <h1 className="form-header1">Basics</h1>
            <p className="form-header2">
              Make a good first impression: introduce your campaign objectives
              and entice people to learn more. This basic information will
              represent your campaign on your campaign page, on your campaign
              card, and in searches.
            </p>
          </div>
          <div className="form-inputs">
            <label className="input-label_campaign">
              Campaign Title <br></br>
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.title}
                onChange={this.props.handleInput("title")}
              />
            </label>

            <label className="input-label_campaign">
              Campaign Description <br></br>
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.description}
                onChange={this.props.handleInput("description")}
              />
            </label>

            <label className="input-label_campaign">
              Campaign Image <br></br>
              <input
                className="form-field_campaign"
                type="text"
                // value={this.props.values.}
                // onChange={this.props.handleInput("title")}
              />
            </label>

            <label className="input-label_campaign">
              Location <br></br>
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.location}
                onChange={this.props.handleInput("location")}
              />
            </label>

            <label className="input-label_campaign">
              Campaign Duration <br></br>
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.duration}
                onChange={this.props.handleInput("duration")}
              />
            </label>

            <button onClick={this.props.handleSubmit}>Launch Campaign</button>
          </div>
        </form>
      </div>
    );
  }

}

export default CampaignFormPt2;

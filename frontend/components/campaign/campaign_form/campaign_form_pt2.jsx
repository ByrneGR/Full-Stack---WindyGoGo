import React, { Component } from 'react'

export class CampaignFormPt2 extends Component {
  render() {
    return (
      <div id="campaignformp2">
        <form
          onSubmit={this.createCampaign}
          className="campaign-form2-parent"
          id="campaign-form2"
        >
          <div className="campaign-form2-parent">
            <h1 className="form-header1" id="basics">Basics</h1>
            <p className="form-header2" id="basicsdescription">
              Make a good first impression: introduce your campaign objectives
              and entice people to learn more. This basic information will
              represent your campaign on your campaign page, on your campaign
              card, and in searches.
            </p>
          </div>
          <div className="formpt2-inputs">
            <label className="input-label_campaign">
              Campaign Title
              <br></br>
              <div className="sublabel">What is the title of your campaign?</div>
              <br></br>
              <input
                className="form-field"
                type="text"
                value={this.props.values.title}
                onChange={this.props.handleInput("title")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              Campaign Description <br></br>
              <input
                className="form-field"
                type="text"
                value={this.props.values.description}
                onChange={this.props.handleInput("description")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              Campaign Image <br></br>
              <input
                className="form-field_campaign"
                type="file"
                // value={this.props.values.}
                onChange={this.props.handleFile}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              Location <br></br>
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.location}
                onChange={this.props.handleInput("location")}
              />
            </label>
            <br></br>
            <label className="input-label_campaign">
              Campaign Duration <br></br>
              <input
                className="form-field_campaign"
                type="text"
                value={this.props.values.duration}
                onChange={this.props.handleInput("duration")}
              />
            </label>
            <br></br>
            <button onClick={this.props.handleSubmit}>Launch Campaign</button>
          </div>
        </form>
      </div>
    );
  }

}

export default CampaignFormPt2;

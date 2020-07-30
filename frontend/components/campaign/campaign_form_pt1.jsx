import React, { Component } from 'react'

export class CampaignFormPt1 extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleInput } = this.props;
    return (
      <div>
        <form className="modal-form" id="login-form">
          <div className="form-headers">
            <h1 className="form-header1">
              Let’s get ready to start your campaign!
            </h1>
            <h2 className="form-header2">
              We want to create the best onboarding for you – please fill out
              the information below. Your answers will be locked for this
              campaign and can’t be changed later.
            </h2>
          </div>
          <div className="form-inputs">
            <label className="input-label">
              Individual? <br></br>
              <input
                className="form-field"
                type="text"
                value={values.creator_type}
                onChange={this.props.handleInput("creator_type")}
              />
            </label>
            <br></br>
            <label className="input-label">
              Password <br></br>
              <input
                className="form-field"
                type="text"
                value={values.location}
                onChange={this.props.handleInput("location")}
              />
            </label>
          </div>
        </form>
        <button onClick={this.continue}></button>
      </div>
    );
  }
}

export default CampaignFormPt1;

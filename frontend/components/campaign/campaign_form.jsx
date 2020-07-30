import React from "react";
import CampaignFormPt1 from './campaign_form_pt1'
import CampaignFormPt2 from './campaign_form_pt2'

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      creator_type: "",
      location: "",
      banking_location: "",
      title: "My Campaign Title",
      description: "",
      duration: 30,
    };
   this.nextStep = this.nextStep.bind(this); 
   this.prevStep = this.prevStep.bind(this); 
  }

  // proceed to next step
  nextStep = function() {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = function() {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleInput(type) { return e =>
    this.setState({[type]: e.currentTarget.value})
  }

  render() {
    const { step } = this.state;
    const {creatorType, location, bankingLocation, title, description, duration} = this.state
    const values = { creatorType, location, bankingLocation, title, description, duration }

    switch(step) {
      case 1:
        return (
          <CampaignFormPt1 nextStep={this.nextStep} handleInput={this.handleInput} values={values}
          />
        )
      case 2:
        return (
          <CampaignFormPt2 prevStep={this.prevStep} handleInput={this.handleInput} values={values} />
        )
    }
  }
}

export default CampaignForm;

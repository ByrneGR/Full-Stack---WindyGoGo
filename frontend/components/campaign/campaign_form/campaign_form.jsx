import React from "react";
import CampaignFormPt1 from './campaign_form_pt1'
import CampaignFormPt2 from './campaign_form_pt2'
import { withRouter } from 'react-router-dom'

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      funding_goal: 1000,
      creator_type: "",
      location: "",
      banking_location: "",
      title: "My Campaign Title",
      tagline: "",
      description: "",
      duration: 30,
      imageFile: null,
      imageUrl: null,
    };
   this.nextStep = this.nextStep.bind(this); 
   this.prevStep = this.prevStep.bind(this); 
   this.handleInput = this.handleInput.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleFile = this.handleFile.bind(this);
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

  handleInput(type) { return e => {
    this.setState({[type]: e.currentTarget.value})
    }
  }  

  handleFile(e) { 
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      
      this.setState({imageFile: file, imageURL: fileReader.result})
    };
    if (file) {
      
      fileReader.readAsDataURL(file);
    };
    
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData1 = new FormData();
    formData1.append('campaign[title]', this.state.title)
    formData1.append('campaign[creator_type]', this.state.creator_type)
    formData1.append('campaign[location]', this.state.location)
    formData1.append('campaign[tagline]', this.state.tagline)
    formData1.append('campaign[funding_goal]', this.state.funding_goal)
    formData1.append('campaign[banking_location]', this.state.banking_location)
    formData1.append('campaign[description]', this.state.description)
    formData1.append('campaign[duration]', this.state.duration)
    if (this.state.imageFile) {

      formData1.append('campaign[image]', this.state.imageFile)
    }
    this.props
      .createCampaign(formData1)
      .then(() => this.props.history.push(`/perks/create/${this.props.campaign.id}`));
      // .then(() => this.props.history.push(`api/campaigns/${this.props.campaign.id}`));

    }

  render() {
    const errors = this.props.errors;
    // const preview = this.state.photoUrl ? <img src= {this.state.photoUrl} />
    const { step } = this.state;
    const {creator_type, location, banking_location, title, description, duration, imageFile, funding_goal} = this.state
    const values = { creator_type, location, banking_location, title, description, duration, imageFile, funding_goal }
    switch(step) {
      case 1:
        return (
          <CampaignFormPt1 errors={errors} nextStep={this.nextStep} handleInput={this.handleInput} values={values}
          />
        )
      case 2:
        return (
          <CampaignFormPt2 errors={errors} prevStep={this.prevStep} handleFile={this.handleFile} handleInput={this.handleInput} values={values} handleSubmit={this.handleSubmit} />
        )
    }
  }
}

export default CampaignForm;

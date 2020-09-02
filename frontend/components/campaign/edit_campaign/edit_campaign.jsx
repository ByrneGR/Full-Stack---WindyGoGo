import React from "react";
import EditCampaignForm from './edit_campaign_form.jsx'


class EditCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.campaign.id,
      funding_goal: this.props.campaign.funding_goal,
      location: this.props.campaign.banking_location,
      title: this.props.campaign.title,
      tagline: this.props.campaign.tagline,
      description: this.props.campaign.description,
      duration: this.props.campaign.duration,
      image: this.props.campaign.image,
      imageUrl: this.props.campaign.photoUrl,
    };
   this.handleInput = this.handleInput.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleFile = this.handleFile.bind(this);
  }

  // proceed to next step

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
    formData1.append('campaign[location]', this.state.location)
    formData1.append('campaign[tagline]', this.state.tagline)
    formData1.append('campaign[funding_goal]', this.state.funding_goal)
    formData1.append('campaign[description]', this.state.description)
    formData1.append('campaign[duration]', this.state.duration)
    formData1.append('campaign[id]', this.state.id)

    if (this.state.imageFile) {
      formData1.append('campaign[image]', this.state.imageFile)
    }
    this.props
      .updateCampaign(formData1)
      // .then(() => this.props.history.push(`/perks/create/${this.props.campaign.id}`));
      .then(
        document.location.href = `#/api/campaigns/${this.props.campaign.id}`)
        // <Route path='/api/:userId/campaigns/' component={MyCampaignsContainer} />
        // document.location.href = `#/api/${this.props.currentUser.id}/campaigns`)

    }

  render() {
    const errors = this.props.errors;
    // const preview = this.state.photoUrl ? <img src= {this.state.photoUrl} />
    const { step } = this.state;
    const {creator_type, tagline, location, banking_location, title, description, duration, imageFile, funding_goal} = this.state
    const values = { tagline, creator_type, location, banking_location, title, description, duration, imageFile, funding_goal }
    if (this.props.campaign) {
        return (
          <EditCampaignForm errors={errors} nextStep={this.nextStep} handleFile={this.handleFile} handleSubmit={this.handleSubmit} handleInput={this.handleInput} values={values}
          />
        )
      } else {
        return null;
      }
  }
}

export default EditCampaign;

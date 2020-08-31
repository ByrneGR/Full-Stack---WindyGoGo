import React from "react";
import PerkFormQuestions from './perk_form_questions'
import { withRouter } from 'react-router-dom'

class PerkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      delivery_date: "mm/dd/yyyy",
      quantity_available: "",
      price: "",
      retail_price: "",
      campaign_id: this.props.id,
      
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 

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
    e.preventDefault();
    const perk = Object.assign({}, this.state)
    debugger
    this.props.createPerk({perk})
      .then(document.location.href = `#/api/campaigns/${this.props.id}`);

    }

  render() {
    const errors = this.props.errors;
    // const preview = this.state.photoUrl ? <img src= {this.state.photoUrl} />
    const { retail_price, title, description, quantity_available, duration, price, delivery_date} = this.state
    const values = { retail_price, title, description, duration, price, delivery_date, quantity_available }
        return (
          <PerkFormQuestions id={this.props.id} errors={errors} prevStep={this.prevStep} handleInput={this.handleInput} values={values} handleSubmit={this.handleSubmit} />
        )
    }
  }


export default PerkForm;

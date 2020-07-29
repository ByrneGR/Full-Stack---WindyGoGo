import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.removeErrors()
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }


  render() {
    const formType = this.props.formType
    const errors = this.props.errors
    let form;

    if (formType === "login") {
      
      form = (
        <div>
        <form className="modal-form">
          <div className = "x-out" onClick={this.props.closeModal}>X</div>
          <div className="form-headers">
            <h1 className="form-header1">Welcome back!</h1>
            <h2 className="form-header2">Log in to continue.</h2>
          </div>
          <div className="form-inputs">
            <label className="input-label">Email <br></br>
            <input className="form-field" type="text" value={this.state.email} onChange={this.handleInput('email')} />
            </label>
            <br></br>
              <label className="input-label">Password <br></br>
              <input className="form-field" type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>

            <div>{errors}</div>
            <button onClick={this.handleSubmit}>Log In</button>
            </div>
          </form>
          <div className="modal-background" onClick={this.props.closeModal}> </div>
        </div>
      )
    } else if (formType === "signup") {

      form = (
        <div>
          <form className="modal-form">
          <div className="x-out" onClick={this.props.closeModal}>X</div>   
          <h1>Welcome!</h1>
          <h2>Sign up to join Indiegogo.</h2>
            <label className="input-label">Email:
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
            </label>

            <label className="input-label">Password:
              <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            <div>{errors}</div>
            <button onClick={this.handleSubmit}>Sign Up</button>

          </form>
          <div className="modal-background" onClick={this.props.closeModal}> </div>
        </div>
      )
    }

    return (
      <div>
        {form}
        
      </div>
      
    );


  }
}

export default SessionForm;
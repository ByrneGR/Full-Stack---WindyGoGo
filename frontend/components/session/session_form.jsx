import React from 'react'
import { Link } from 'react-router-dom'


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  render() {
    const formType = this.props.formType
    const errors = this.props.errors
    let form;

    if (formType === "login") {
      
      form = (
        <div>
        <form className="modal-form">
          <h1>Welcome back!</h1>
          <h2>Log in to continue.</h2>
          
            <label>Email
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
            </label>

            <label>Password:
              <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>

            <button onClick={this.handleSubmit}>Log In</button>

          </form>
          <div className="modal-background"> </div>
        </div>
      )
    } else if (formType === "signup") {

      form = (
        <div>
          <form className="modal-form">
          <h1>Welcome!</h1>
          <h2>Sign up to join Indiegogo.</h2>
            <label>Email:
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
            </label>

            <label>Password:
              <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>

            <button onClick={this.handleSubmit}>Sign Up</button>

          </form>
          <div className="modal-background"> </div>
        </div>
      )
    }

    return (
      <div>
        {form}
        {errors}
      </div>
      
    );


  }
}

export default SessionForm;
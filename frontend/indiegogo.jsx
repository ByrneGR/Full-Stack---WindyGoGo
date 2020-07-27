import React from "react";
import ReactDOM from "react-dom";
import {logIn, logOut, signUp} from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")
  ReactDOM.render(<h1>Welcome to Indiegogo</h1>, root)

  window.logIn = logIn;
  window.logOut = logOut;
  window.signUp = signUp;
})


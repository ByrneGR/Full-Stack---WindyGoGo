import React from 'react';
import ReactDOM from 'react-dom';
import { logIn, logOut, signUp } from './util/session_api_util'
import configureStore from './store/store';
import Root from './components/root'
import { login } from './actions/session_actions'




document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preLoadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preLoadedState)
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logIn = logIn;
  window.signUp = signUp;
  window.logOut = logOut;
  window.login = login;

  ReactDOM.render(<Root store={store} />, root);
});

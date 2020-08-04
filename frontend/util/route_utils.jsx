import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id),
  modal: state.ui.modal
})

const Auth = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, modal, path, component: Component, exact}) => {
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : modal="login" (
        <Redirect to="/" />
      )
  )} />
}




export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))
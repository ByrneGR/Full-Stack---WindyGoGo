import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import Modal from "../components/modal/modal";


const msp = state => ({
  loggedIn: Boolean(state.session.id),
  modal: "login"
})

const mdp = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
});

const Auth = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, modal, path, component: Component, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Modal modal="login" {...props}/>
      )
  )} />
)

// const Protected = ({ loggedIn, path, modal, component: Component, exact}) => { 
//   return (
//         <Route path={path} exact={exact} render={(props) => {
//           if (!loggedIn) {
//            props.openModal("login");
//           } else {
//             return <Component {...props} />
//           }
//         }
//       } 
//     />
//   )
// }
   
export const AuthRoute = withRouter(connect(msp, mdp)(Auth))

export const ProtectedRoute = withRouter(connect(msp, mdp)(Protected))
import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions'
import SessionForm from './session_form'
import React from 'react'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup',
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(signup(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Login
    </button>  
  ),
  logIn: formUser => dispatch(login(formUser)),
  closeModal: () => dispatch(closeModal()),
  removeErrors: () => dispatch(removeErrors()),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
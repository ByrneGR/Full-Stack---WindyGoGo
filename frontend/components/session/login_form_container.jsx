import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions'
import SessionForm from './session_form'
import React from 'react';
import {openModal, closeModal} from '../../actions/modal_actions'

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'login',
})

const mapDispatchToProps = (dispatch) => ({
  processForm: formUser => dispatch(login(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  removeErrors: () => dispatch(removeErrors()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
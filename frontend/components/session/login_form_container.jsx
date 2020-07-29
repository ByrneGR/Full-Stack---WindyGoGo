import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
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
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
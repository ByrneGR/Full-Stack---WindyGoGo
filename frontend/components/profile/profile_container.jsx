import { connect } from 'react-redux';
import { logout, fetchUser } from '../../actions/session_actions'
import Profile from './profile'
import { openModal } from '../../actions/modal_actions'



const mapStateToProps = (state, { match }) => {
  debugger
  const id = parseInt(match.params.userId);
  const user = state.entities.users[id]
  return {
    id,
    user,
  }  
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
import {connect} from 'react-redux';
import {createPerk} from '../../../actions/perk_actions';
import PerkForm from './perk_form_fake';

const msp = state => {
  debugger
  let last = Object.values(state.entities.campaigns).length - 1
  return(
  {
  errors: state.errors.session,
  campaign: Object.values(state.entities.campaigns)[last]
})}

const mdp = dispatch => ({
  createPerk: perk => dispatch(createPerk(perk))
})

export default connect(msp, mdp)(PerkForm)
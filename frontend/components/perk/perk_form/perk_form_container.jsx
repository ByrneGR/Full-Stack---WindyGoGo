import {connect} from 'react-redux';
import {createPerk} from '../../../actions/perk_actions';
import PerkForm from './perk_form_fake';

const msp = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.campaignId);
  return(
  {
  errors: state.errors.session,
  id,
})}

const mdp = dispatch => ({
  createPerk: perk => dispatch(createPerk(perk))
})

export default connect(msp, mdp)(PerkForm)
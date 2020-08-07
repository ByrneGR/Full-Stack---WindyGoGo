import {connect} from 'react-redux';
import {createCampaign} from '../../../actions/campaign_actions';
import CampaignForm from './campaign_form';

const msp = state => {
  let last = Object.values(state.entities.campaigns).length - 1
  return(
  {
  errors: state.errors.session,
  campaign: Object.values(state.entities.campaigns)[last]
})}

const mdp = dispatch => ({
  createCampaign: campaign => dispatch(createCampaign(campaign))
})

export default connect(msp, mdp)(CampaignForm)
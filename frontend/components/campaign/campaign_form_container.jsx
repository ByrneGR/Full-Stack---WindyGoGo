import {connect} from 'react-redux';
import {createCampaign} from '../../actions/campaign_actions';
import CampaignForm from './campaign_form';

const msp = state => ({
  errors: state.errors.session,
  campaign: state.entities.campaigns
})

const mdp = dispatch => ({
  createCampaign: campaign => dispatch(createCampaign(campaign))
})

export default connect(msp, mdp)(CampaignForm)
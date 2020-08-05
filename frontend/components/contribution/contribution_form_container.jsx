import { connect } from 'react-redux';
import { createContribution } from '../../actions/contribution_actions';
import { fetchCampaign } from "../../actions/campaign_actions";
import ContributionForm from './contribution_form';

const msp = (state, {match}) => {
  const id = parseInt(match.params.campaignId);
  const campaign = state.entities.campaigns[id]
  return {
    errors: state.errors.session,
    id,
    campaign,
  }
}

const mdp = dispatch => ({
  createContribution: contribution => dispatch(createContribution(contribution)),
  fetchCampaign: campaignId => dispatch(fetchCampaign(campaignId))
})

export default connect(msp, mdp)(ContributionForm)
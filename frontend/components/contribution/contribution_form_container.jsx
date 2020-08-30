import { connect } from 'react-redux';
import { createContribution } from '../../actions/contribution_actions';
import { fetchCampaign } from "../../actions/campaign_actions";
import { fetchPerk } from "../../actions/perk_actions";
import ContributionForm from './contribution_form';


const msp = (state, {match}) => {
  const id = parseInt(match.params.campaignId);
  const perkId = parseInt(match.params.perkId)
  const campaign = state.entities.campaigns[id];
  const perk = state.entities.perks[perkId];
  return {
    errors: state.errors.session,
    id,
    perkId,
    campaign,
    perk
  }
}

const mdp = dispatch => ({
  createContribution: contribution => dispatch(createContribution(contribution)),
  fetchCampaign: campaignId => dispatch(fetchCampaign(campaignId)),
  fetchPerk: perkId => dispatch(fetchPerk(perkId))
})

export default connect(msp, mdp)(ContributionForm)
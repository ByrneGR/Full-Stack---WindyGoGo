import { connect } from "react-redux";
import { fetchCampaign } from "../../../actions/campaign_actions";
import CampaignShow from "./campaign_show";

const msp = (state, {match}) => {
  const id = parseInt(match.params.campaignId);
  const campaign = state.entities.campaigns[id]
  const currentUser = state.session

  return {
    campaign,
    id,
    currentUser
  }
};

const mdp = (dispatch) => ({
  fetchCampaign: (campaignId) => dispatch(fetchCampaign(campaignId)),
});

export default connect(msp, mdp)(CampaignShow);

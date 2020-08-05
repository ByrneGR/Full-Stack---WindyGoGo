import { connect } from "react-redux";
import { fetchCampaigns } from "../../../actions/campaign_actions";
import CampaignShow from "./campaign_show";

const msp = (state, { match }) => {
  const id = parseInt(match.params.campaignId);
  const campaign = state.entities.campaigns[id]
  return {
    campaign,
    id
  }
};

const mdp = (dispatch) => ({
  fetchCampaign: (campaignId) => dispatch(fetchCampaign(campaignId)),
});

export default connect(msp, mdp)(CampaignShow);
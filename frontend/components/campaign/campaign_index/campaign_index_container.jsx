import { connect } from "react-redux";
import { fetchCampaigns } from "../../../actions/campaign_actions";
import CampaignIndex from "./campaign_index";

const msp = (state, { match }) => {
  const campaigns = state.entities.campaigns
  return {
    campaigns,
  }
};

const mdp = (dispatch) => ({
  fetchCampaigns: () => dispatch(fetchCampaigns()),
});

export default connect(msp, mdp)(CampaignIndex);
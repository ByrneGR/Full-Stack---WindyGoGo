import { connect } from "react-redux";
import { fetchUserCampaigns } from "../../../actions/campaign_actions";
import CampaignIndex from "./campaign_index";

const msp = (state, { match }) => {
  const campaigns = state.entities.campaigns
  return {
    campaigns,
  }
};

const mdp = (dispatch) => ({
  fetchUserCampaigns: () => dispatch(fetchUserCampaigns()),
});

export default connect(msp, mdp)(CampaignIndex);
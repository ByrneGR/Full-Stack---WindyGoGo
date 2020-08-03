import { connect } from "react-redux";
import { createCampaign } from "../../../actions/campaign_actions";
import CampaignShow from "./campaign_show";

const msp = (state, {match}) => {
  const id = parseInt(match.params.campaignId);
  const campaign = state.entities.campaigns.campaign
  return {
    campaign,
    id
  }
};

const mdp = (dispatch) => ({
  createCampaign: (campaign) => dispatch(createCampaign(campaign)),
});

export default connect(msp, mdp)(CampaignShow);

import { connect } from "react-redux";
import { createCampaign } from "../../actions/campaign_actions";
import CampaignShow from "./campaign_show";

const msp = (state) => ({
  errors: state.errors.session,
  campaign: state.entities.campaigns.campaign,
});

const mdp = (dispatch) => ({
  createCampaign: (campaign) => dispatch(createCampaign(campaign)),
});

export default connect(msp, mdp)(CampaignForm);

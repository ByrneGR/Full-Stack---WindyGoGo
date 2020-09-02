import { connect } from "react-redux";
import { fetchUserCampaigns, deleteCampaign } from "../../../actions/campaign_actions";
import MyCampaigns from "./my_campaigns";

const msp = (state, ownProps) => {
  const campaigns = state.entities.campaigns
  const userId = ownProps.match.params.userId
  return {
    campaigns,
    userId,
    currentUser: state.entities.users[state.session.id]
  }
};

const mdp = (dispatch) => ({
  fetchUserCampaigns: (userId) => dispatch(fetchUserCampaigns(userId)),
  deleteCampaign: campaignId => dispatch(deleteCampaign(campaignId)) 
});

export default connect(msp, mdp)(MyCampaigns);
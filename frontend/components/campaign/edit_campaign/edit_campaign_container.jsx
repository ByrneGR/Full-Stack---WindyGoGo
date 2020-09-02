import React from "react";
import {connect} from 'react-redux';
import {updateCampaign, fetchCampaign} from '../../../actions/campaign_actions';
import EditCampaign from './edit_campaign';


class EditCampaignContainer extends React.Component {


  componentDidMount() {
    this.props.fetchCampaign(this.props.id)
  }

  render() {
    const {
      id,
      campaign,
      currentUser,
      errors,
      updateCampaign,
      fetchCampaign
    } = this.props;

    if (!campaign) return null;
    return (
      <EditCampaign
      campaign={campaign}
      currentUser={currentUser}
      errors={errors}
      updateCampaign={updateCampaign}
      fetchCampaign={fetchCampaign}
      />
    )
  }

  
}  





const msp = (state, {match}) => {
  const id = parseInt(match.params.campaignId);
  const campaign = state.entities.campaigns[id]
  const currentUser = state.session

  return {
    campaign,
    id,
    currentUser,
    errors: state.errors.session
  }
}

const mdp = dispatch => ({
  updateCampaign: campaign => dispatch(updateCampaign(campaign)),
  fetchCampaign: (campaignId) => dispatch(fetchCampaign(campaignId))
})

export default connect(msp, mdp)(EditCampaignContainer)



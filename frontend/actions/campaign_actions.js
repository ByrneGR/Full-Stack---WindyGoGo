import {fetchcampaigns, fetchcampaign, createcampaign, deletecampaign} from '../util/campaign_api_util';

export const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS';
export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const REMOVE_CAMPAIGN = 'REMOVE_CAMPAIGN';


const receiveCampaigns = campaigns => ({
  type: RECEIVE_CAMPAIGNS,
  campaigns
})

const receiveCampaign = campaign => ({
  type: RECEIVE_CAMPAIGN,
  campaign
})

const removeCampaign = campaignId => ({
  type: REMOVE_CAMPAIGN,
  campaignId
})

export const fetchCampaigns = () => dispatch => (
  fetchcampaigns().then(campaigns => dispatch(receiveCampaigns(campaigns)))
)

export const fetchCampaign = campaignId => dispatch => (
  fetchcampaign(campaignId).then(campaign => dispatch(receiveCampaign(campaign)))
)

export const createCampaign = campaign => dispatch => (
  createcampaign(campaign).then(campaign => dispatch(receiveCampaign(campaign)))
)

export const deleteCampaign = campaignId => dispatch => (
  deletecampaign(campaignId).then(() => dispatch(removeCampaign(campaignId)))
)
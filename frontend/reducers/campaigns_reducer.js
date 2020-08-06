import { RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN, CREATE_CAMPAIGN } from "../actions/campaign_actions";

const campaignsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPAIGNS:
      return action.campaigns;
    case RECEIVE_CAMPAIGN:
      return Object.assign({}, state, {[action.campaign.id]: action.campaign})      
    default:
      return state;  
  }
}

export default campaignsReducer;
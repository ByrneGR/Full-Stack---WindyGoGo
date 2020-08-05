import { RECEIVE_CONTRIBUTIONS, RECEIVE_CONTRIBUTION, CREATE_CONTRIBUTION } from "../actions/contribution_actions";

const contributionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONTRIBUTIONS:
      action.contributions;
    case RECEIVE_CONTRIBUTION:
      return Object.assign({}, state, {[action.contribution.id]: action.contribution})      
    default:
      return state;  
  }
}

export default contributionsReducer;
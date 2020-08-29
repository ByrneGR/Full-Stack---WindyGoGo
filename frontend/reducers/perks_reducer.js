import { RECEIVE_PERKS, RECEIVE_PERK, CREATE_PERK } from "../actions/perk_actions";

const perksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PERKS:
      action.perks;
    case RECEIVE_PERK:
      return Object.assign({}, state, {[action.perk.id]: action.perk})      
    default:
      return state;  
  }
}

export default perksReducer;
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import campaignsReducer from './campaigns_reducer';
import contributionsReducer from './contributions_reducer'; 

const entitiesReducer = combineReducers({
    users: usersReducer,
    campaigns: campaignsReducer,
    contributions: contributionsReducer,
});

export default entitiesReducer;
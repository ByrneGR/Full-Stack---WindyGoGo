import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import campaignsReducer from './campaigns_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    campaigns: campaignsReducer
});

export default entitiesReducer;
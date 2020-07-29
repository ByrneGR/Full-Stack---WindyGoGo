import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/session_actions';

const _emptyErrors = [];

export default (state = _emptyErrors, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return _emptyErrors;
        case REMOVE_ERRORS:
            return action.errors;      
        default:
            return state;
    }
};
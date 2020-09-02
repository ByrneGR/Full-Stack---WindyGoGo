import {logIn, logOut, signUp, fetchuser} from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS'
export const RECEIVE_USER = 'RECEIVE_USER'

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

const receiveErrors = (errors) => {
    return {
    type: RECEIVE_ERRORS,
    errors,
}};

export const removeErrors = () => {
    return {
    type: REMOVE_ERRORS,
    errors: []
}};

export const signup = user => dispatch => signUp(user).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)));

export const login = user => dispatch => logIn(user).then(user => dispatch(receiveCurrentUser(user)), errors=> dispatch(receiveErrors(errors.responseJSON)));

export const logout = () => dispatch => logOut().then(() => dispatch(logoutCurrentUser()));

export const fetchUser = userId => dispatch => fetchuser(userId).then(user => dispatch(receiveUser(user)))






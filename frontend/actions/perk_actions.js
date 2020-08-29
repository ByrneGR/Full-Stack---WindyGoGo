import {fetchperks, fetchperk, createperk} from '../util/perk_api_util';

export const RECEIVE_PERKS = 'RECEIVE_PERKS';
export const RECEIVE_Perk = 'RECEIVE_PERK';

const receivePerks = perks => ({
  type: RECEIVE_PERKS,
  perks
})

const receivePerk = perk => ({
  type: RECEIVE_PERK,
  perk
})


export const fetchPerks = () => dispatch => (
  fetchperks().then(perks => dispatch(receivePerks(perks)))
)

export const fetchPerk = perkId => dispatch => (
  fetchperk(perkId).then(perk => dispatch(receivePerk(perk)))
)

export const createPerk = perk => dispatch => (
  createperk(perk).then(perk => dispatch(receivePerk(perk)))
)
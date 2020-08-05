import {fetchcontributions, fetchcontribution, createcontribution} from '../util/contribution_api_util';

export const RECEIVE_CONTRIBUTIONS = 'RECEIVE_CONTRIBUTIONS';
export const RECEIVE_CONTRIBUTION = 'RECEIVE_CONTRIBUTION';

const receiveContributions = contributions => ({
  type: RECEIVE_CONTRIBUTIONS,
  contributions
})

const receiveContribution = contribution => ({
  type: RECEIVE_CONTRIBUTION,
  contribution
})


export const fetchContributions = () => dispatch => (
  fetchcontributions().then(contributions => dispatch(receiveContributions(contributions)))
)

export const fetchContribution = contributionId => dispatch => (
  fetchcontribution(contributionId).then(contribution => dispatch(receiveContribution(contribution)))
)

export const createContribution = contribution => dispatch => (
  createcontribution(contribution).then(contribution => dispatch(receiveContribution(contribution)))
)
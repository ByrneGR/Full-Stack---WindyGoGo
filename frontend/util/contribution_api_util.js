export const createcontribution = (contribution) => {
  return $.ajax({
    url: 'api/contributions',
    method: 'POST',
    data: contribution
  })
}

export const fetchcontributions = () => {
  return $.ajax({
    url: `api/contributions/`,
    method: 'GET'
  })
}

export const fetchcontribution = (contributionId) => {
  return $.ajax({
    url: `api/contributions/${contributionId}`,
    method: 'GET'
  })
}

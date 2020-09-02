export const fetchallcampaigns = () => {
  return $.ajax({
    url: 'api/users/:user_id/campaigns',
    method: 'GET'
  })
}

export const fetchusercampaigns = (userId) => {
  return $.ajax({
    url: `api/users/${userId}/campaigns`,
    method: 'GET'
  })
}

export const fetchcampaign = (campaignId) => {
  return $.ajax({
    url: `api/campaigns/${campaignId}`,
    method: 'GET'
  })
}
export const createcampaign = (campaign) => {
  return $.ajax({
    url: 'api/campaigns',
    method: 'POST',
    data: campaign,
    contentType: false,
    processData: false
  })
}

export const deletecampaign = campaignId => {
  return $.ajax({
    url: `api/campaigns/${campaignId}`,
    method: 'DELETE',
  })
}

export const updatecampaign = (campaign) => {
  return $.ajax({
    url: `api/campaigns/${campaign.id}`,
    method: 'PATCH',
    data: campaign,
    contentType: false,
    processData: false
  })
}
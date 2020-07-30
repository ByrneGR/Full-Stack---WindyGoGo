export const fetchcampaigns = () => {
  return $.ajax({
    url: 'api/campaigns',
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
    data: {campaign}
  })
}

export const deletecampaign = campaignId => {
  return $.ajax({
    url: `api/campaigns/${campaignId}`,
    method: 'DELETE',
  })
}
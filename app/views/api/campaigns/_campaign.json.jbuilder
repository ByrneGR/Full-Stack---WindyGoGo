json.extract! campaign, :id, :title, :description, :duration, :creator_id, :image, :funding_goal, :amount_raised
  json.photoUrl url_for(campaign.image)
  json.contributions campaign.contributions
  json.creator campaign.creator
  json.number_of_backers campaign.number_of_backers
  json.percent_raised campaign.percent_raised
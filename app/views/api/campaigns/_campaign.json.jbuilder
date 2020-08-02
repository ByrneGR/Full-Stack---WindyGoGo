json.extract! campaign, :id, :title, :description, :duration, :creator_id
json.photoUrl url_for(campaign.image)
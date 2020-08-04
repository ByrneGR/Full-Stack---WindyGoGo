json.extract! campaign, :id, :title, :description, :duration, :creator_id, :image
json.photoUrl url_for(campaign.image)
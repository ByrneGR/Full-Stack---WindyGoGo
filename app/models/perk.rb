class Perk < ApplicationRecord 
  # validates: :delivery_date, length: {minimum: 10, maximum: 10}

  belongs_to :campaign,
    foreign_key: :campaign_id,
    class_name: :Campaign

  # belongs_to :creator,
  #   source: :creator,
  #   through: :campaign


end



class Campaign < ApplicationRecord
  validates :location, :title, :description, :duration, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User
end

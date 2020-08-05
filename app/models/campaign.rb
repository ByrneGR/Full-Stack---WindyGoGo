class Campaign < ApplicationRecord
  validates :location, :title, :description, :duration, :creator_type, :banking_location, presence: true
  validates :creator_type, inclusion: { in: ["Individual", "Business/Nonprofit"]}
  validates :banking_location, inclusion: { in: ["United States", "Other countries"]}

  validate :ensure_image

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :contributions,
    foreign_key: :campaign_id,
    class_name: :Contribution

  has_one_attached :image

  def ensure_image
    unless self.image.attached?
      errors[:image] << "Must be attached"
    end  
  end  
end

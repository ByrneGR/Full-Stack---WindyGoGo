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

  has_many :backers,
    through: :contributions,
    source: :backer


  has_one_attached :image

  def ensure_image
    unless self.image.attached?
      errors[:image] << "Must be attached"
    end  
  end
  
  def number_of_backers
    return backers.length
  end  

  def amount_raised
    sum = 0
    self.contributions.each do |contribution|
      sum += contribution.contribution_amount
    end
    return sum  
  end  

  def percent_raised
    return ((self.amount_raised * 1.0) / self.funding_goal * 1.0).round(2) * 100
  end  
end

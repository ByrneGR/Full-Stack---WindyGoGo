class Contribution < ApplicationRecord
  validates :name_on_card, :card_number, :contribution_appearance, presence: true, :contribution_amount

  belongs_to :backer,
    foreign_key: :backer_id,
    class_name: :User

  belongs_to :campaign,
    foreign_key: :campaign_id,
    class_name: :Campaign

end



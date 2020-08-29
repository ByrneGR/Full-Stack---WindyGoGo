class Addcampaignid < ActiveRecord::Migration[5.2]
  def change
    add_column :perks, :campaign_id, :integer
  end
end

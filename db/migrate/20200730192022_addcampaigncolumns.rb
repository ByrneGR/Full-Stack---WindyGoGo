class Addcampaigncolumns < ActiveRecord::Migration[5.2]
  def change
    add_column :campaigns, :creator_type, :string
    add_column :campaigns, :banking_location, :string
  end
end

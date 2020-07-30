class Addindexcampaigns < ActiveRecord::Migration[5.2]
  def change
    add_index :campaigns, :creator_id
  end
end

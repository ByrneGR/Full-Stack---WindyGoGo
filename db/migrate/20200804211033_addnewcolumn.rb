class Addnewcolumn < ActiveRecord::Migration[5.2]
  def change
    add_column :contributions, :campaign_id, :integer
  end
end

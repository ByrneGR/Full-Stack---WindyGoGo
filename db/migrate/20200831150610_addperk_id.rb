class AddperkId < ActiveRecord::Migration[5.2]
  def change
    add_column :contributions, :perk_id, :integer
  end
end

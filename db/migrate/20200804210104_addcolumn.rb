class Addcolumn < ActiveRecord::Migration[5.2]
  def change
    add_column :contributions, :backer_id, :integer
  end
end

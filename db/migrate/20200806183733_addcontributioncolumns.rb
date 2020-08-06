class Addcontributioncolumns < ActiveRecord::Migration[5.2]
  def change
    add_column :campaigns, :funding_goal, :integer
    add_column :campaigns, :funding_raised, :integer
  end
end

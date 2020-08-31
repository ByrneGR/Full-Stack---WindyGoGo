class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :campaigns, :tagline, :string
  end
end

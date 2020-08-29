class CreatePerks < ActiveRecord::Migration[5.2]
  def change
    create_table :perks do |t|
      t.string :title
      t.string :description
      t.date :delivery_date
      t.integer :quantity_available
      t.integer :price
      t.integer :retail_price
    end
  end
end

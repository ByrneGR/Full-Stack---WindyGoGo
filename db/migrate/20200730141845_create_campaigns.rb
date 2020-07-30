class CreateCampaigns < ActiveRecord::Migration[5.2]
  def change
    create_table :campaigns do |t|
      t.string :location, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :duration, null: false
      t.integer :creator_id, null: false, unique: true
      t.timestamps
    end
  end
end

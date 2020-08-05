class CreateContribution < ActiveRecord::Migration[5.2]
  def change
    create_table :contributions do |t|
      t.string :full_name, null: false
      t.string :email_address, null: false
      t.string :name_on_card, null: false
      t.integer :card_number, null: false
      t.string :contribution_appearance, null: false
    end
  end
end

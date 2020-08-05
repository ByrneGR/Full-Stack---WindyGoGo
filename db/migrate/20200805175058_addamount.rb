class Addamount < ActiveRecord::Migration[5.2]
  def change
    add_column :contributions, :contribution_amount, :integer
    change_column :contributions, :card_number, :string
  end
end

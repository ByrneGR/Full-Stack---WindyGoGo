class Changeconstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :contributions, :full_name, :email_address, true
  end
end


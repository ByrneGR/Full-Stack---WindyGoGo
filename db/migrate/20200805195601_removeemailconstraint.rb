class Removeemailconstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :contributions, :email_address, true    
  end
end

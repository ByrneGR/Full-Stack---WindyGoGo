class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, unique: true, null: false
      t.string :password_digest, unique: true, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :users, :email
    add_index :users, :password_digest
  end
end

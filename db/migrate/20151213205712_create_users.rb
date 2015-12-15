class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :city_id, null: false

      t.timestamps null: false
    end

    add_index :users, :email, unique: true
    add_index :users, :city_id
  end
end

class CreateStarredListings < ActiveRecord::Migration
  def change
    create_table :starred_listings do |t|
      t.integer :listing_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :starred_listings, :listing_id
    add_index :starred_listings, :user_id
  end
end

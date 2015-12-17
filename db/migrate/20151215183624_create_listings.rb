class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.string :address, null: false
      t.float :latitude
      t.float :longitude
      t.string :archived, null: false, default: false
      t.integer :author_id, null: false
      t.integer :city_id, null: false
      t.integer :category_id, null: false
      t.string :image_url

      t.timestamps null: false
    end

    add_index :listings, :author_id
    add_index :listings, :city_id
    add_index :listings, :category_id
  end
end

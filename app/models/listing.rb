class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :images
  has_many :starred_listings

  accepts_nested_attributes_for :images

  validates :title, :description, :price, :address,
  :latitude, :longitude, :user_id, :city_id, presence: true

end

class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :images
  has_many :starred_listings

  accepts_nested_attributes_for :images
end

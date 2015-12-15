class Category < ActiveRecord::Base
  validates :category_name, uniqueness: true
end

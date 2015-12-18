# json.array! @listings, :title, :description, :price, :address,
# :user_id, :city_id, :category_id, :id, :latitude, :longitude

json.array! @listings do |listing|
  json.title listing.title
  json.description listing.description
  json.price listing.price
  json.address listing.address
  json.city_id listing.city_id
  json.category_id listing.category_id
  json.latitude listing.latitude
  json.longitude listing.longitude
  json.id listing.id
  json.user_id listing.user_id

  listing.images.each_with_index do |image,idx|
    json.idx image
  end
end

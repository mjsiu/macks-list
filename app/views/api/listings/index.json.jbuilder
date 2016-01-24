# json.array! @listings, :title, :description, :price, :address,
# :user_id, :city_id, :category_id, :id, :latitude, :longitude

json.array! @listings do |listing|
  json.title listing.title
  json.user listing.user.email
  json.description listing.description
  json.price listing.price
  json.address listing.address
  json.city_id listing.city_id
  json.category_id listing.category_id
  json.latitude listing.latitude
  json.longitude listing.longitude
  json.id listing.id
  json.user_id listing.user_id
  json.create_date distance_of_time_in_words_to_now(listing.created_at)
  json.archived listing.archived
  json.email User.find(listing.user_id).email

  json.images listing.images do |image|
    json.id image.id
    json.url image.url
  end
end

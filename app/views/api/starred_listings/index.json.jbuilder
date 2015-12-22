json.array! @starred_listings do |listing|
  json.title listing.title
  json.description listing.description
  json.price listing.price
  json.city_id listing.city_id
  json.id listing.id
  json.user_id listing.user_id
  json.create_date distance_of_time_in_words_to_now(listing.created_at)
  json.archived listing.archived
end

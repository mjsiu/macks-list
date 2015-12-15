# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.connection.reset_pk_sequence!('User')
ActiveRecord::Base.connection.reset_pk_sequence!('Listing')
ActiveRecord::Base.connection.reset_pk_sequence!('City')
ActiveRecord::Base.connection.reset_pk_sequence!('Category')

User.create(username: "Escobar", email: "ecobar@gmail.com", password: "password", city_id: 1)

Listing.create(title: "iPhone 6s", description: "Unused iPhone 6s for sale", price: 699.99, address: "Powell Street, San Francisco, California", author_id: 1, city_id: 1, category_id: 1)
Listing.create(title: "Designer cluthing", description: "Three-hundred-dollar T-shirt", price: 300, address: "3rd Street, San Mateo, California", author_id: 2, city_id: 4, category_id: 2)
Listing.create(title: "Bench", description: "Bench 3 seater", price: 300.50, address: "SJ State, San Jose, California", author_id: 3, city_id: 2, category_id: 3)

City.create(name: "San Francisco", latitude: 37.774733, longitude: -122.418702)
City.create(name: "Oakland", latitude: 37.804755, longitude: -122.273140)
City.create(name: "Berkeley", latitude: 37.873035, longitude: -122.275520)
City.create(name: "San Mateo", latitude: 37.562787, longitude: -122.317107)
City.create(name: "San Jose", latitude: 37.336132, longitude: -121.896811)

Category.create(category_name: "Electronics")
Category.create(category_name: "Clothing")
Category.create(category_name: "Home")
Category.create(category_name: "Sports")

# rake db:drop db:create db:migrate db:seed

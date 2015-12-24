# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bike = "This bike is cool. This bike is cool.This bike is cool.This bike is cool.This bike is cool.This bike is cool.This bike is cool.This bike is cool. "

ActiveRecord::Base.connection.reset_pk_sequence!('User')
ActiveRecord::Base.connection.reset_pk_sequence!('Listing')
ActiveRecord::Base.connection.reset_pk_sequence!('City')
ActiveRecord::Base.connection.reset_pk_sequence!('Category')

User.create(username: "escobar", email: "ecobar@gmail.com", password: "password", city_id: 1)

Listing.create(title: "Limited Edition Book", description: Faker::Hipster.paragraphs(3, false),
price: 50, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 1, category_id: 1)
Listing.create(title: "Homeade Pasta", description: Faker::Hipster.paragraphs(3, false),
price: 300, address: "3rd Street, San Mateo, California", user_id: 2, city_id: 2,
category_id: 2)
Listing.create(title: "Boat", description: Faker::Hipster.paragraphs(3, false), price: 50, address:
"Berkeley, Berkeley, California", user_id: 3, city_id: 3, category_id: 3)
Listing.create(title: "Radio", description: Faker::Hipster.paragraphs(3, false),
price: 100, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 3, category_id: 3)
Listing.create(title: "Briefcase", description: Faker::Hipster.paragraphs(3, false),
price: 1200, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 4, category_id: 4)
Listing.create(title: "Motorcycle", description: Faker::Hipster.paragraphs(3, false),
price: 450, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 5, category_id: 1)
Listing.create(title: "Camera", description: Faker::Hipster.paragraphs(3, false),
price: 15, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 1, category_id: 2)
Listing.create(title: "Laptop", description: Faker::Hipster.paragraphs(3, false),
price: 79, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 1, category_id: 1,
latitude: 37.774733, longitude: -122.418702)
Listing.create(title: "Bike", description: Faker::Hipster.paragraphs(3, false),
price: 79, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 1, category_id: 1, archived: true,
latitude: 37.774733, longitude: -122.418702)


City.create(name: "San Francisco", latitude: 37.774733, longitude: -122.418702)
City.create(name: "Oakland", latitude: 37.804755, longitude: -122.273140)
City.create(name: "Berkeley", latitude: 37.873035, longitude: -122.275520)
City.create(name: "San Mateo", latitude: 37.562787, longitude: -122.317107)
City.create(name: "San Jose", latitude: 37.336132, longitude: -121.896811)

Category.create(category_name: "Appliances")
Category.create(category_name: "Automotive")
Category.create(category_name: "Clothing")
Category.create(category_name: "Electronics")
Category.create(category_name: "Farm and Garden")
Category.create(category_name: "Health and Beauty")
Category.create(category_name: "Home")
Category.create(category_name: "Jewelry")
Category.create(category_name: "Misc")
Category.create(category_name: "Musical Instruments")
Category.create(category_name: "Pets")
Category.create(category_name: "Sports")

Image.create(listing_id: 1, url: "v1450242541/pexels-photo_tfopmu.jpg")
Image.create(listing_id: 2, url: "/v1450242515/food-pasta-spinach_edtjyx.jpg")
Image.create(listing_id: 3, url: "v1450239812/206H_auh8dd.jpg")
Image.create(listing_id: 4, url: "v1450239811/DBYDOD6O96_jex3gw.jpg")
Image.create(listing_id: 5, url: "v1450239805/186H_ogcqm9.jpg")
Image.create(listing_id: 6, url: "v1450239782/257_1_fkjtwf.jpg")
Image.create(listing_id: 7, url: "v1450231337/photographer-analog-camera-cameras-teleobjective_hiksqi.jpg")
Image.create(listing_id: 8, url: "v1450239798/negativespace-13_uvkh4j.jpg")
Image.create(listing_id: 9, url: "v1450239818/245H_mxolvq.jpg")

StarredListing.create(user_id: 1, listing_id: 9)
StarredListing.create(user_id: 1, listing_id: 8)
StarredListing.create(user_id: 1, listing_id: 7)
StarredListing.create(user_id: 1, listing_id: 6)




# rake db:drop db:create db:migrate db:seed

# heroku pg:reset DATABASE
# heroku run rake db:migrate db:seed

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

faker_users = [{username: "Guest", email: "Guest1231231@gmail.com", password: "go_guest_go", city_id: 1}]

100.times do
  faker_users << {username: Faker::Internet.user_name, email: Faker::Internet.email, password: Faker::Internet.password, city_id: Faker::Number.between(1, 5)}
end

faker_users.each do |user|
  User.create(user)
end

Listing.create(title: "Limited Edition Book", description: "Thank you for viewing
this very limited edition publication produced by the Artists' Workshop Press of
Detroit in 1967. This 20-page underground comic book is entitled Bloom and is
one of only 500 copies printed. The author/artist is John Ka. It was not printed
on high quality paper--no one probably expected it to still be around nearly 50 years
later--and so is in fair to good condition. The pages have tanned and there are some
small scrapes at the top of the front cover.
$250 We have other vintage underground books, comics, pamphlets, publications available.
We live in Concord, California, near Clayton, and frequently visit the Pinole and
Albany/Berkeley areas; occasionally Vacaville, Lincoln, and other Bay Area cities. We will not respond to requests to pay by money order, cashier's check, etc. TO SEE OUR OTHER ITEMS, click on MORE ADS BY THIS USER to the right at the top or cut & paste (or type) the following in the Craigslist search box: Vince and Lisa
",
price: 50, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 1, category_id: 1, latitude: 37.774733, longitude: -122.418702)
Listing.create(title: "Homeade Pasta Maker", description: "Used only once. In perfect
condition. I am moving so I need to sell. Sells new for $87.99 on Amazon and
$52.50 on sale. Used prices range from $20-$60 on eBay. I also have the pasta
machine of the same manufacturer for sale alsos
Made by the Marcato family in Italy
Roll out perfect sheets of ravioli measuring 1 1/2 X 2
Create homemade pasta in minutes
Fits the Marcato Atlas 150 pasta machine
Do not wash with water or in dishwasher, clean with a brush or wooden rod
A great gift idea for the cook in your family.",
price: 50, address: "3rd Street, San Mateo, California", user_id: 1, city_id: 2,
category_id: 2, latitude: 37.774733, longitude: -122.418702)
Listing.create(title: "Boat", description: "Up for sale is this 30 ft Sail Boat and 32 ft trailer.
Boat Needs Tlc.
The Trailer is a sought after Trailer as its a Triple Axel and 32 or 33 ft long.
3900.00 obo
No Motor
MUST SELL.
MAKE AN OFFER
EIGHT THREE ONE TWO FIVE ONE ONE NINE THREE SEVEN", price: 50, address:
"Berkeley, Berkeley, California", user_id: 1, city_id: 3, category_id: 3,
latitude: 37.774733, longitude: -122.418702)
Listing.create(title: "Radio", description: Faker::Hipster.paragraphs(3, false),
price: 3900, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 3, category_id: 3, latitude: 37.774733, longitude: -122.418702)
Listing.create(title: "Briefcase", description: Faker::Hipster.paragraphs(3, false),
price: 1200, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 4, category_id: 4, latitude: 37.774733, longitude: -122.418702)
Listing.create(title: "Motorcycle", description: Faker::Hipster.paragraphs(3, false),
price: 450, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 5, category_id: 1, latitude: 37.774733, longitude: -122.418702)
Listing.create(title: "Camera", description: Faker::Hipster.paragraphs(3, false),
price: 15, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 1, category_id: 2, latitude: 37.774733, longitude: -122.418702)
Listing.create(title: "Laptop", description: Faker::Hipster.paragraphs(3, false),
price: 79, address: "Powell Street, San Francisco, California", user_id:
1, city_id: 1, category_id: 1,
latitude: 37.774733, longitude: -122.418702)
Listing.create(title: "Bike", description: "Straight out of the time capsule comes
this classic Specialized Stumpjumper all terrain bike, tuned and ready to ride! This
bike is all original from the grips down to the tires. Made-in-Japan by Miyata, double
butted chromoly frame tubes and fork blades with a Specialized S stamped lugged fork
crown. Specialized triple cranks with the alloy dustcaps, & the rare & coveted Suntour
XC pedals. Plenty of other Suntour XC parts, including front & rear derailleurs, & friction
thumb shifters. Front derailleur is reverse pull for logical, consistent shifting.
Bullmoose-style stem & bars made by Nitto, with original Castelli grips & Tommaselli motorcycle
levers with original boots! Saturae wheelset with original tanwall rubber, alloy Specialized
headset, fastback seatstays, 1st generation Shimano Deore XT cantilever brakes, the list
just doesn't stop! The perfect bike that will get you around town, or down the trail for years
to come, with class and style. 21 frame fits riders from 5'7 to 5'11. Come down to our showroom
at 201 Santa Rosa Ave (corner of Sonoma & SR Ave) Saturdays & Sundays email to make an appointment
 if you want to check it out. Cash, Credit/Debit Card, & PayPal accepted. We also love trade-ins!",
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

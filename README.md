#MacksList

[Heroku Link][MacksList]

[MacksList]: http://herokuapp.com

## Minimum Viable Product (MVC)

MacksList is inspired by CraigsList, a community driven website where users are able to list local advertisements for free. MacksList is built using Ruby on Rails and React.js. With MacksList, users can enjoy the features of CraigsList with an updated UI that utilizes React.js.

Users will be able to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, view, edit, and delete ads
- [ ] "Star" listings to keep track of ads
- [ ] Search through ads by location/category
- [ ] Use Google Maps to view ad locations

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline
Total time: 10 days
Total phases: 7 + bonus phase

### Phase 1: User Authentication, Ad Model and JSON API
[ 1.5 day(s) ]

In Phase 1, I will implement the entire auth process. You will be able to login/sign up. Upon login, you will be redirected to a user show page, which will contain will just contain empty templates for future features.

I will also set up the model for the ads as well as implementing an API interface to interact with Ad data, which the rest of my project will depend on. This will rely on properly setting up my backend to support Ads.


### Phase 2: Setup Flux
[ 1 day(s) ]

I will take one day to plan out the Flux architecture for my project. I will also take the time to set up my React routers before proceeding to the rest of my project. It is also in this phase that I'll set up the Ad store, which will make use of the JSON API I created from the day before. My goal is to set up everything necessary to allow me to implement the component features that I want for my Ads.


## Phase 3: Setup Ad CRUD
[ 2 day(s) ]

Phase 3 will focus on implementing Ad CRUD which is the main data type for my project. I will spend the first day and a half implementing Ad CRUD into my project and generating all of the UI necessary to CRUD Ads.

For the last portion of the 2 days, I will also create empty templates for implementing future features. This includes 1) starring ads, 2) rendering a Google Maps component to show the location of the ads.


## Phase 4: Starring Ads
[ 1.5 day(s) ]

This phase will be spent implementing the ability to "star" ads and have them show up on a users show page. This allows users to keep track of ads and provides them with a UI to interact with starred listings. I will also be creating a React component which users will be able to interact with on their show page.


## Phase 5: Searching through Ads and Search Map
[ 2 day(s) ]

Two days will be spent implementing the search portion of my app. In this section, users will have the ability to search through ads with filters primarily based on location/category. More filter options will be added in the bonus phase portion if time permits.

On the same page as the search, there will be a Google Maps React component which will have pins that will show the location of the results.


## Phase 6: Database Seeding and UI testing
[ 1 day(s) ]  

One day will be dedicated entirely to setting up the seed database with presentable data. The database will need to include a variety of ads from different cities and categories.

The latter part of the day will also be spent checking overall UI compatibility. I will use the following checklist, which is ordered by priority.

UI Compatibility Checklist:
- [ ] Smoke test of all UI components
- [ ] Reasonable compatibility across browsers
- [ ] Resolve all UI issues
- [ ] Note necessary styling changes for next day


## Phase 7: Styling and cleanup
[ 1 day(s) ]

I will spend the last day of my project making any additional styling changes that are necessary. I will also do minor refactoring of code, being sure to make use of git branching (as to not permanently break anything), and clean up my code to be more presentable. The primary goal is to clean up my code and this serves as more of a final check.


### Bonus Features
[ ? day(s) ]

Checklist of ideas to keep in mind. These are not absolute and are not ordered in priority.

- [ ] Mobile compatibility
- [ ] Advanced filtering options in Ad search
- [ ] Add Google Maps component to each individual listing
- [ ] Garbage collection for old Ads
- [ ] Email notifications for changes to starred Ads

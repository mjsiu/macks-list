#MacksList

MacksList is a fully functional web-application built using Ruby on Rail backend,
HTML/CSS/JS, React, and Flux on the frontend. The application also utilizes 3rd
party APIs, Cloudinary for image uploading and Google Maps for location maps.

You can visit the project at https://mackslist.org.

## Main Functionality

- Search for listings by city and category filters
- Create listings for other users to be able to view
- Favorite listings to keep track of them on personal profile page
- Manage (delete, update) personal listings on profile page
- Manage favorited listings (delete) from personal profile page

## Additional Features

- Google Maps integration to show listing location
- Flux store architecture to interact with RESTful json API
- Custom authentication process handled by Rails, using BCRYPT
- User specific session control and authorization
- Integrated bootstrap with customized css options
- Multiple image upload associations via Cloudinary API


## Design Docs
* [Schema][schema]
* [Design Doc][design]

[schema]: https://docs.google.com/spreadsheets/d/1KnhgUhN-IOz86nop6256eKNmh3myQn5JpoEqpfmv9Ys/edit?usp=sharing
[design]: ./docs/devREADME.md

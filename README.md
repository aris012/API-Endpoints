# IT5005 Assessment 2
## Project Web Implementation


### Overview
#### Tongariro Cinemas Limited

Tongariro is an independent cinema located in wellington, I was tasked to implement a basic API using Node.js to help the system transition from manual to an automated. 

API handles the basic functionalities such as:
* Movie Listing
* Booking
* User Management
API has a basic security standard.

API Endpoints provide functionalities:

For Endpoints for Movie Listing
* GET /movieRoutes : Retrieve a list of all movie.
* POST /movieRoutes : Creates a new movie listing.
* PUT /movieRoutes/id : Update details of a specific movie.
* DELETE /movieRoutes/id : Remove a movie from the listing.

For Endpoints for Bookings 
* GET /bookRoutes : Retrieve a list of all bookings.
* POST /bookRoutes : Creates a new booking.
* PUT /bookRoutes/id : Update details of a specific booking.
* DELETE /bookRoutes/id : Remove a movie from the listing.

For Endpoints for User Management
* GET /userRoutes : Retrieve a list of all users.
* POST /userRoutes : Creates a new user.
* PUT /userRoutes/id : Update details of a specific user.
* DELETE /userRoutes/id : Remove a user from the listing.

### API Testing

#### Thunder Client
We use thunder client from visual studio code extension for easier and easy to locate whenever we want to test our API.

## API Setup and Testing Instructions.

Created a directory for json packages to install all the dependencies, for my main source of my API which is index.js, created all the functionalities.

* Install npm init -y
* Install express using npm install --save express
* Install i nodemon dotenv
* created a index.js file inside the directory, this where all the application, routes, mongoDB connection is connected
* create a folder for schema, router, and controllers
* create a dotenv for more security of the data.
* created a schema folder for mongoDB the attributes and data types, using the function model we could use the value for the controller.
* created a controller folder we impoter the model function from schema to controller for out api endpoints
* created the router folder we imported the mongoose and controller folder

for testing 

* open thunder client my testing app
* putting the port url
* then selecting the request you want to use.

## Citation

modules:
* https://learn.mywhitecliffe.com/courses/1715/pages/setting-up-nodejs?module_item_id=91886
* https://learn.mywhitecliffe.com/courses/1715/pages/web-application-construction-via-node-express-and-more?module_item_id=91888

videos:
* https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/updating-the-page-from-rest?resume=false&u=36492252
* https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/a-little-intro-to-rest-apis?resume=false&u=36492252
* https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-and-testing-an-api-endpoint?autoSkip=true&resume=false&u=36492252
* https://youtube.com/playlist?list=PLTjRvDozrdlynYXGUfyyMZdrQ0Sz27aud&si=C6MkQP8O2NfaAYS3
* https://www.youtube.com/watch?v=vjf774RKrLc
* https://www.youtube.com/watch?v=pKd0Rpw7O48
* https://www.youtube.com/watch?v=1VA0MPwFcyU
* https://youtu.be/_7UQPve99r4?si=HFhcdd7uzQPTxCF1
* https://www.youtube.com/watch?v=-MTSQjw5DrM&amp;t=15s
* https://youtu.be/43jRFjpWldk?si=7KzggkKSKjRGT41h
* https://youtu.be/LpnRosizeoY?si=CJT0Z9tc_skW1px9
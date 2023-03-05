# MEAN Travlr App

![](https://imgur.com/b9f5bm0.jpg)

https://travlr.creynolds.dev

---

### Architecture

This project used various technologies to develop the frontend(s). The client facing website primarily uses HTML and handlebars for page contents and Express handles the routing of these pages. For the admin SPA, I used Angular and html. All of the routing is done by Angular. Both of these applications are sent from the server, however, the SPA application is only sent from the server once, and the rest runs on the client machine. The normal client front end must make a server call for each page visited. 

### Functionality

JSON is Javascript Object Notation. So an object defined in Javascript will be in JSON, however JSON also serves as a nice way to package data. The API in this application sends JSON responses to the SPA as well as client frontend. The API also receives JSON requests from the admin SPA such as authentication requests, and updates to specific entries in the database.

### Testing

I tested most of this application manually, however, the API was tested using postman. From postman, I tested each API endpoint to see if it returned the expected response based on a particular request. Each endpoint had one or more methods. For instance, the /api/trips endpoint had a GET and PUT method defined. The GET method would return trips from the database, while the PUT method would try to add a new trip based on the PUT request body information. Any methods that modified the database had authentication middle ware to make sure that only logged in users could perform these methods.

### Reflection

I hope to gain the role of fullstack developer in my CS career, so this course and project were a great primer for the real fullstack world. In the past I have used Mongo.db, Express, and Node.js. I was quite familiar with these technologies, but I had zero experience with Angular. As Angular is widely used in the industry, while working on this project, I got invaluable experience using it. This is also my first complete fullstack web application.

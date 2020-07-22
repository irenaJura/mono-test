## Project Info

This is a minimalistic application about vehicle makes and models.

Home page contains a grid of car brands (vehicleMakes), which you may search through and sort by ascending/descending alphabetical order.

It also contains pagination.

There is an edit page with a table of vehiclemakes, and a form for adding a new vehiclemake.

The existing makes can be edited or deleted.

## Technologies

This project was done with React and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

State management was in great deal implemented with MobX.

I followed these naming conventions: https://github.com/airbnb/javascript/tree/master/react and the folder structure was organized as stated in official React documents: https://reactjs.org/docs/faq-structure.html.

For the image uploading feature, I used NodeJS and axios to send ajax requests.

I used express to create a server, multer to handle files and Nodemon to monitor the changes and auto-reload.

On the frontend, I also added react-bootstrap library for styling.

## Launch the project

After downloading or cloning this project, run npm install to add node modules and then run npm start.

To start the backend server, run nodemon server.js.





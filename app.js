// Importing required modules
const express = require('express');
require('dotenv').config();

// Creating an Express application
const app = express();

// Setting up the port
const port = process.env.PORT || 3000;

// Creating a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

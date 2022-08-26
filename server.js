const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./backend/routes');
const PORT = process.env.PORT || 3001;
const app = express();

// below is my api middlware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// here is the server static
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// api routes
app.use(routes);

// here react routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/build/index.html'));
});

// here is for mongo connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/brewerApp');

// this will allow server to start up
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

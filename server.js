const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./backend/routers');
const PORT = process.env.PORT || 3001;
const app = server();

//coding middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// server static section
if (process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));
};

//api routes line
app.use(routes);

// react route here
app.get('*', (req, rest) => {
    res.sendfile(path.join(__dirname, './../client/build/index.html'));
      
});

// mongo connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/brewerApp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.set("debug", true);


// server start
app.listen(PORT) 

 


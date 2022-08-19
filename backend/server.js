const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

//coding middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/brewerApp');

// server start
app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`)) 

 


const mongoose = require('mongoose');
const { Recipes } = require('../models');
const db = require('../models');
const Recipe= require('../models/recipe.js')
mongoose.Promise = global.Promise;
const recipeSeed = [
  
    {
      name: "Name of that beer type",
      brewer: "",
      beerType: "molson",
      style: "type of beer, lager , IPA, etc",
      likes: 10,
      description:
        "Brewed with 100% type of 'hops' from where they are grown, and say a few words why they name that beer and what type of flavor is give in the beer",
    },

      {
      name: "Name of that beer type",
      brewer: "",
      beerType: "molson",
      style: "type of beer, lager , IPA, etc",
      likes: 10,
      description:
        "Brewed with 100% type of 'hops' from where they are grown, and say a few words why they name that beer and what type of flavor is give in the beer",
    }
  
];

mongoose.set("debug", true);

// mongo connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/brewerApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
    
      
      Recipe.db.collections.recipes.insertMany(recipeSeed,(error, result) => {
        
          console.log("data added successfully");
          mongoose.disconnect();
        
      });
  
  });
;



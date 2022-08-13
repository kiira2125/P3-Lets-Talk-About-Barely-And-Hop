const db = require('../models');

module.exports = {
    findAll: (req, res) {
      dbRecipe
        .find(req.query)
        .sort({likes: -1})
        .populate('brewer', {password:0})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));  
    },

    findById: (req, res) =>{
        dbRecipe
           .findById(req.params.id)
           .populate('brewer', {password:0})
           .then(dbModel => res.json(dbModel))
           .catch(err => res.status(422).json(err)); 
    },
    
    create: (req, res) => {
        dbRecipe
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));  
    },

    update: (req, res) =>{
        dbRecipe
         .findOneAndUpdate({ _id: req.params.id}, req.body, {new: true})
         .populate('brewer', {password:0})
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err)); 
    },

    remove: (req, res) => {
        dbRecipe
         .findById({ _id: req.params.id})
         .then(dbModel => dbModel.remove())
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
    }
};
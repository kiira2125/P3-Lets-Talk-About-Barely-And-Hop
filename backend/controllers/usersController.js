const bcrypt = require('bcrypt');
const db = require('../backend/models');

module.exports = {
    findAll: (req, res) =>
        db.User
            .find(req.query, {password: 0})
            .populate({path: 'recipes', populate: {path: 'brewer'}})  
            .populate('media.followers', {password: 0})
            .populate('media.following', {password: 0})
            .populate({path: 'favorites', populate: {path: 'brewer'}}) 
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },

    findById: (req, res) => {
        db.User
        .find(req.query, {password: 0})
        .populate({path: 'recipes', populate: {path: 'brewer'}})  
        .populate('media.followers', {password: 0})
        .populate('media.following', {password: 0})
        .populate({path: 'favorites', populate: {path: 'brewer'}}) 
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },

    create: (req, res) => {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.has(req.body.password, salt, (err, hash) => {
            req.body.password =hash;
        dbUser
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));

       });
     });
    },

    update: (req, rew) =>{
      dbUser
        .update({ _id: req.params.id}, req.body, {password: 0})
        .then(dbModel => res.json({updated: dbModel}))
    }






   }
        
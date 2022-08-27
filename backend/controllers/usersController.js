const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = {
    findAll: (req, res) =>{
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
        .findById(req.params.id, {password: 0})
        .populate({path: 'recipes', populate: {path: 'brewer'}})  
        .populate('media.followers', {password: 0})
        .populate('media.following', {password: 0})
        .populate({path: 'favorites', populate: {path: 'brewer'}}) 
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },

    create: async function (req, res) {
      console.log(req.body)
      try {
        let hash = await bcrypt.hash(req.body.password, 10)
        let dbModel = await db.Users
        .create({
          username: req.body.username,
          password: hash,
        })
        res.status(200).json(dbModel)
      } catch (err) {
        console.log(err)
        res.status(422).json(err)
      }
    },

    update: (req, rew) =>{
      dbUser
        .update({ _id: req.params.id}, req.body, {password: 0})
        .then(dbModel => res.json({updated: dbModel}))
        .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
      dbUser
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json({updated: dbModel}))
        .catch(err => res.status(422).json(err));
    }
  };
        
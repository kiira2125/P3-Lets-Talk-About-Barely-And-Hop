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


        
const router = require('express').Router();
const userRoutes = require('./user');
const recipeRoutes = require('./recipes');
const loginRoutes  = require('./login');

// the routes for user, recipe and login
router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/login', loginRoutes);


module.exports = router;
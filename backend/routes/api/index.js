const router = require('express').Router();
const userRoutes = require('./users');
const recipeRoutes = require('./recipe');
const loginRoutes  - require('./login');

// the routes for user, recipe and login
router.use('/users', userRouter);
router.use('/recipes', recipeRouter);
router.use('/login', loginRouter);


module.exports = router;
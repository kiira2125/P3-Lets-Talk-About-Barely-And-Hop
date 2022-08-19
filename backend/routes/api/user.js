const router = require('express').Router();
const usersController = require('../../controllers/usersController');


// here code for the api/user using .get and .post 
router.route('/')
   .get(usersController.findAll)
   .post(usersController.create);

// here code for the api/user using route id, .get (findById), .put (update), and, .delete(remove)
router.route('/:id')
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove)

module.exports = router;
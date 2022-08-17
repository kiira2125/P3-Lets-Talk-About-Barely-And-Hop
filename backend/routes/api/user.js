const router = require('express').Router();
const usersController = require('../../controllers/userController');


// here code for the api/user using .get and .post 
router.route('/')
   .get(userController.findAll)
   .post(userController.create);

// here code for the api/user using route id, .get (findById), .put (update), and, .delete(remove)
router.route('/:id')
    .get(userController.finById)
    .put(userController.update)
    .delete(userController.remove)

module.exports = router;
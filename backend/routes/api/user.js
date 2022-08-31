const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const loginController = require('../../controllers/loginController');

// here code for the api/user using .get and .post 
router.route('/')
   .get(usersController.findAll)
   .post(usersController.create);

router.route('/login')
.post(loginController.checkLogin)

// here code for the api/user using route id, .get (findById), .put (update), and, .delete(remove)
router.route('/:id')
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove)

module.exports = router;
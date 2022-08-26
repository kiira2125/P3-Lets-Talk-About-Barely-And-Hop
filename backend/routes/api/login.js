const router = require('express').Router();
const loginController = require('../../controllers/loginController');

// input the .route for username and .get check username
router
  .route('/check/:username/')
  .get(loginController.checkUsername);

// input the .router for password and .get check login
// 'api/login/:users and /:password

// router.get("/check/:username", loginController.checkUsername);
// router.get(loginController.checkUsername);
router
  .route('/:username/:password')
  .get(loginController.checkLogin);

module.exports = router;
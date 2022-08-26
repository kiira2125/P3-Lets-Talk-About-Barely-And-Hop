const router = require('express').Router();
const loginController = require('../../controllers/loginController');

// input the .route for username and .get check username
router
  .route('/check/:username/')
  .get(loginController.checkUsername);

// router.get("/check/:username", loginController.checkUsername);
// router.get(loginController.checkUsername);

router
  .route('/:username/:password')
  .get(loginController.checkLogin);

module.exports = router;
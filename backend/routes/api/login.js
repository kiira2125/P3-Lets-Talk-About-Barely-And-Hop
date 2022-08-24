const router = require('express').Router();
const loginController = require('../../controllers/loginController');

// input the .route for username and .get check username
// router.router('/:username')

router.get("/check/:username", loginController.checkUsername);
// router.get(loginController.checkUsername);

// input the .router for password and .get check login
// router.router('/:password');

router.get("/check/:password", loginController.checkLogin);
// router.get(loginController.checkLogin);

module.exports = router;
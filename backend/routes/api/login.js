const router = require('express').Router();
const loginController = require('../../controllers/loginController');

// input the .route for username and .get check username
router.router('/:username')

app.route('/check/:username')
app.get(loginController.checkUsername);

// input the .router for password and .get check login
router.router('/:password');

app.route('.check/:password')
app.get (loginController.checkLogin);

module.exports = router;
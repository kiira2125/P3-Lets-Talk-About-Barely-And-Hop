const router = require('express').Router();
const recipesController = require("../../controllers/recipesController")

//getting recipe in the api using get and post
router.route('/')
    .get(recipesController.findAll)
    .post(recipesController.create);

// getting recipe using .route (:id using), .get (findById), .put (update), and, .delete(remove)
router.route('/:id')

    .get(recipesController.findById)
    .put(recipesController.update)
    .delete(recipesController.remove)

module.exports = router;
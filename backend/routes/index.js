const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// our api routes here (router.use) method
router.use('/api', apiRoutes);

// the react router here (router.use method) and res.sendFile method
// router.use(function(req,res){
//     res.sendFile(path.join(__dirname, '../../client/build/index.html'));
// });

module.exports = router;
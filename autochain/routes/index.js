var express = require('express');
var router = express.Router();

var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/') 
  },
  filename: function (req, file, cb) {
     cb(null, Date.now() + path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage });

var ip = require('ip');

const userController = require('../controllers/userController');
const carController = require('../controllers/carController');
const utilityController = require('../controllers/utilityController');
const modelController = require('../controllers/modelController');




router.get('/bc',function(req,res){

	const MyNetwork = require('../libs/autochain');
	
	var m = new MyNetwork();
	m.init();
	//m.getVehicles();
	res.send(m);
});

/**
 * User routes
 */

router.get('/v1/api/users',userController.index); // get list of all users
router.get('/v1/api/user',userController.show); // get details of a currently logged in user
router.post('/v1/api/user',upload.any(),userController.create); // create a new user
router.get('/v1/api/user/:slug',userController.show); // get details of a single user
router.put('/v1/api/user/:slug',upload.any(),userController.update); // update user 
router.delete('/v1/api/user/:slug',userController.delete); // delete user 

/**
 * User login routes
 */

router.post('/authenticate',userController.authenticate); 
router.post('/session',userController.session); 
router.post('/logout',userController.logout); 


/**
 * get a list of entities
 */
router.get('/v1/api/entities',utilityController.entities); 

/**
 * Anayltics
 */
router.post('/v1/api/analytics',utilityController.analytics); 
router.get('/v1/api/chart1',utilityController.chart1); 
router.get('/v1/api/chart2',utilityController.chart2); 
router.get('/v1/api/chart3',utilityController.chart3); 
router.get('/v1/api/chart4',utilityController.chart4); 
router.get('/v1/api/chart5',utilityController.chart5); 
router.get('/v1/api/chart6',utilityController.chart6); 
router.get('/v1/api/chart6',utilityController.chart6); 
router.get('/v1/api/chart7',utilityController.chart7); 

/**
 * Movie routes
 */

router.get('/v1/api/cars',carController.index); 
router.get('/v1/api/car/:slug',carController.show); 
router.delete('/v1/api/car/:slug',carController.delete); 
router.post('/v1/api/car',upload.any(),carController.create); 
router.put('/v1/api/car/:slug',upload.any(),carController.update); 



/**
 * Genre routes
 */


router.get('/v1/api/categories',modelController.index); 
router.get('/v1/api/category/:slug',modelController.show); 
router.delete('/v1/api/category/:slug',modelController.delete); 
router.post('/v1/api/category',upload.any(),modelController.create); 
router.put('/v1/api/category/:slug',upload.any(),modelController.update); 



module.exports = router;



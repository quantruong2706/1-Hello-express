const express = require('express');


const router = express.Router();

const controller = require('../controllers/user.controller');

const validate = require('../validate/user.validate')

const authMiddleware = require('../middlewares/auth.middleware');

const multer = require('multer');

var upload = multer({ dest: './public/uploads/'})

router.get('/',authMiddleware.requireAuth ,controller.index);

router.get('/cookie', function(req, res){
	res.cookie('user-id', 12345);
	res.send("Hello" );
});

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.getId);

router.post('/create',
	upload.single('avatar'),
	validate.postCreate,
	 controller.postCreate
);

module.exports = router;
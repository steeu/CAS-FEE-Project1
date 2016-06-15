var express = require('express');
var router = express.Router();
var controller = require('../controller/notesController.js');


/* GET home page. */
router.get('/', controller.showIndex);

module.exports = router;

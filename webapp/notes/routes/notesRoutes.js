var express = require('express');
var router = express.Router();
var notesController = require('../controller/notesController.js');

/**
 * pages
 */

// get index
router.get('/', notesController.showNotes);
// add form
router.get('/add', notesController.addNote);
// edit form
router.get("/edit/:id/", notesController.editNote);

/**
 * rest
 */

// rest all
router.get("/rest/notes/", notesController.restAllNotes);

module.exports = router;

var express = require('express');
var router = express.Router();
var notesController = require('../controller/notesController.js');

/**
 * hba router
 */

// get index
router.get('/', notesController.showNotes);
// add form
router.get('/add', notesController.addNote);
// edit form
router.get("/update/:id/", notesController.getNote);

/**
 * REST router
 */

// rest all
router.get("/rest/notes/", notesController.restAllNotes);
// rest open
router.get("/rest/notes/open/", notesController.restOpenNotes);
// rest finished
router.get("/rest/notes/finished/", notesController.restFinishedNotes);
// rest update
router.put("/rest/note/:id/", notesController.restUpdateNote);
// rest delete
router.delete("/rest/note/:id/", notesController.restDeleteNote);

module.exports = router;

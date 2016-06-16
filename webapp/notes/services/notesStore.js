var Datastore = require('nedb');
var db = new Datastore({filename: './data/notes.db', autoload: true});

function Note(params) {
    var params = params || {};

    this.title = params.title || 'Titel neue Notiz ...';
    this.content = params.content || 'Inhalt neue Notiz ...';
    this.priority = params.priority || 1;
    this.finishDate = JSON.stringify(new Date());
    this.finished = false;
    this.createDate = JSON.stringify(new Date());
};

// add note
function publicAddNote(callback) {
    var note = new Note();

    db.insert(note, function (err, newDoc) {
        if (callback) {
            callback(err, newDoc);
        }
    });
};

// edit note
function publicGetNote(id, callback) {

    db.findOne({_id: id}, function (err, doc) {
        if (callback) {
            callback(err, doc);
        }
    });
};

// edit note
function publicUpdateNote(id, updatedNote, callback) {

    db.update({_id: id}, updatedNote, function (err, numReplaced) {
        if (callback) {
            callback(err, numReplaced);
        }
    });
};

// delete note
function publicDeleteNote(id, callback) {

    db.remove({_id: id}, {}, function (err, numRemoved) {
        if (callback) {
            callback(err, numRemoved);
        }
    });
};

// all notes
function publicAllNotes(callback) {

    db.find({}, function (err, docs) {
        if (callback) {
            callback(err, docs);
        }
    });
};

module.exports = {
    get: publicGetNote,
    add: publicAddNote,
    update: publicUpdateNote,
    delete: publicDeleteNote,
    all: publicAllNotes
};
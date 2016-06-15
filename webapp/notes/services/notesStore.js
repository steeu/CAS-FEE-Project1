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
function publicEditNote(id, callback) {

    db.findOne({ _id: id }, function (err, doc) {
        callback(err, doc);
    });
};

// delete note
function publicDeleteNote(id, callback) {

};

// all notes
function publicAllNotes(callback) {
    db.find({}, function (err, docs) {
        callback(err, docs);
    });
};

module.exports = {
    add: publicAddNote,
    edit: publicEditNote,
    delete: publicDeleteNote,
    all: publicAllNotes
};
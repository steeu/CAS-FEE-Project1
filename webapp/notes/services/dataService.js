var Datastore = require('nedb');
var db = new Datastore({filename: './data/notes.db', autoload: true});
var moment = require('moment');

function Note(params) {
    var params = params || {};

    this.title = params.title;
    this.content = params.content;
    this.priority = params.priority || 1;
    this.finishDate = moment().format("YYYY-MM-DD");
    this.createDate = moment().format("YYYY-MM-DD");
    this.finished = false;
};

// add note
function publicAddNote(callback) {
    db.insert(new Note(), function (err, newDoc) {
        if (callback) {
            callback(err, newDoc);
        }
    });
};

// get note
function publicGetNote(id, callback) {
    db.findOne({_id: id}, function (err, doc) {
        if (callback) {
            callback(err, doc);
        }
    });
};

// get all notes
function publicAllNotes(filter, callback) {
    db.find(filter).sort({priority: -1}).exec(function (err, docs) {
        if (callback) {
            callback(err, docs);
        }
    });
};

// edit note
function publicUpdateNote(id, updatedNote, callback) {
    console.log(updatedNote);
    db.update({_id: id}, {$set: updatedNote}, function (err, numReplaced) {
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

module.exports = {
    get: publicGetNote,
    all: publicAllNotes,
    add: publicAddNote,
    update: publicUpdateNote,
    delete: publicDeleteNote
};
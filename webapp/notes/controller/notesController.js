var store = require("../services/notesStore.js");

module.exports.showNotes = function(req, res)
{
    store.all(function(err, notes) {
        res.render("index", notes);
    });
};

module.exports.addNote = function(req, res)
{
    store.add(function(err, note) {
        res.render("note", note);
    });
};

module.exports.getNote = function(req, res)
{
    store.get(req.params.id, function(err, note) {
        res.render("note", note);
    });
};



module.exports.restAllNotes =  function (req, res)
{
    store.all(function(err, notes) {
        res.format({
            'application/json': function(){
                res.json(notes);
            }
        });
    });
};

module.exports.restUpdateNote = function(req, res)
{
    store.update(req.params.id, req.body, function(err, numReplaced) {
        res.format({
            'application/json': function(){
                res.json(numReplaced);
            }
        });
    });
};

module.exports.restDeleteNote = function(req, res)
{
    store.delete(req.params.id, function(err, note) {
        res.format({
            'application/json': function(){
                res.json(note);
            }
        });
    });
};
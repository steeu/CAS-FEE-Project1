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

module.exports.editNote = function(req, res)
{
    store.edit(req.params.id, function(err, note) {
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
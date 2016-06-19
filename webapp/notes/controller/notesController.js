var store = require("../services/dataService.js");

module.exports.showNotes = function(req, res)
{
    store.all({}, function(err, notes) {
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
{   console.log("all notes");
    store.all({}, function(err, notes) {
        res.format({
            'application/json': function(){
                res.json(notes);
            }
        });
    });
};

module.exports.restOpenNotes =  function (req, res)
{
    store.all({finished: false}, function(err, notes) {
        res.format({
            'application/json': function(){
                res.json(notes);
            }
        });
    });
};

module.exports.restFinishedNotes =  function (req, res)
{
    store.all({finished: true}, function(err, notes) {
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
                res.json({numReplaced: numReplaced});
            }
        });
    });
};

module.exports.restDeleteNote = function(req, res)
{
    store.delete(req.params.id, function(err, numRemoved) {
        res.format({
            'application/json': function(){
                res.json({numRemoved: numRemoved});
            }
        });
    });
};
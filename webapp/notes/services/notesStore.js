var Datastore = require('nedb');
var db = new Datastore({ filename: './data/notes.db', autoload: true });

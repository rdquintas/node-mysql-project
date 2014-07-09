var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

// var xuri = "mongodb://zrquser:Qqweqwe11@ds027688.mongolab.com";



// var mongodb = require('mongodb');
// var uri = 'mongodb://zrquser:Qqweqwe11@ds027688.mongolab.com:27688/zrqtesting';

// var myCollection;

// mongodb.MongoClient.connect(uri, function(err, db) {
//     // console.log(err);
//     // this.myDB = db;
//     // this.myCena = db;

//     db.collection('wines', {
//         strict: true
//     }, function(err, collection) {
//         if (err) {
//             console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
//             populateDB(db);
//         }
//     });
//     this.myCollection = db.collection;
// });







exports.testeLindo = function(db) {
    // console.log('zrq: ' + app.get("zrq"));
    var id = "533c7be10c69b2d037296c6e";
    console.log('Retrieving cena: ' + "533c7be10c69b2d037296c6e");
    db.collection('wines', function(err, collection) {
        collection.findOne({
            '_id': new BSON.ObjectID(id)
        }, function(err, item) {
            res.send(item);
        });
    });
};


exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving wine: ' + id);
    this.myCollection('wines', function(err, collection) {
        collection.findOne({
            '_id': new BSON.ObjectID(id)
        }, function(err, item) {
            res.send(item);
        });
    });
};


/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function(param_db) {

    var wines = [{
        name: "CHATEAU DE SAINT COSME",
        year: "2009",
        grapes: "Grenache / Syrah",
        country: "France",
        region: "Southern Rhone",
        description: "The aromas of fruit and spice...",
        picture: "saint_cosme.jpg"
    }, {
        name: "LAN RIOJA CRIANZA",
        year: "2006",
        grapes: "Tempranillo",
        country: "Spain",
        region: "Rioja",
        description: "A resurgence of interest in boutique vineyards...",
        picture: "lan_rioja.jpg"
    }];

    param_db.collection('wines', function(err, collection) {
        collection.insert(wines, {
            safe: true
        }, function(err, result) {});
    });

};

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

var xuri = "mongodb://zrquser:Qqweqwe11@ds027688.mongolab.com";



var mongodb = require('mongodb');
var uri = 'mongodb://zrquser:Qqweqwe11@ds027688.mongolab.com:27688/zrqtesting';

var myCena = "";

mongodb.MongoClient.connect(uri, function(err, db) {
    // console.log(err);
    // this.myDB = db;
    this.myCena = db;

    db.collection('wines', {
        strict: true
    }, function(err, collection) {
        if (err) {
            console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
            populateDB(db);
        }
    });
});

// MongoClient.connect("mongodb://zrquser:Qqweqwe11@ds027688.mongolab.com:27688", function(err, db) {
//     if (!err) {
//         console.log("We are connected");
//     }
// });

// var db = null;

// var mongoclient = new MongoClient(new Server(zrqServer, null), {
//     native_parser: true
// });

// mongoclient.open(function(err, mongoclient) {
//     // db = mongoclient.db("zrqtesting");
//     console.log("err: " + err);

//     // db.open(function(err, db) {
//     //     console.log("err:" + err);
//     //     db.close();
//     // });
// });









// // Connect to the db
// MongoClient.connect("mongodb://zrquser:Qqweqwe11@ds027688.mongolab.com:27688/zrqtesting", function(err, db) {
//     if (!err) {
//         console.log("We are connected");
//     }
// });





// db.open(function(err, db) {
//     if (!err) {
//         console.log("Connected to 'winedb' database");
//         db.collection('wines', {
//             strict: true
//         }, function(err, collection) {
//             if (err) {
//                 console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
//                 populateDB();
//             }
//         });
//     } else {
//         console.log("err: " + err);
//     }
// });





exports.testeLindo = function(req, res) {
    console.log("this.myCena: " + this.myCena);
};

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving wine: ' + id);
    this.myCena.collection('wines', function(err, collection) {
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

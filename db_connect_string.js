

    var MongoClient = require('mongodb').MongoClient, assert= require('assert');
    var cnct='mongodb://localhost:27017/photography';
    MongoClient.connect(cnct, function (err, db) {
        assert.equal(null, err);
        console.log("this shit works");
        db.close();
    });

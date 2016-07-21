var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Tehya Morison | Photography' });
});

/* GET home page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});

//Post request for contact form
router.post('/contact', function (req, res) {
    //Set internal db
    var db = req.db;

    //get form values
    var contactName = req.body.name;
    var contactEmail = req.body.email;

    console.log('hey');


    //set collection 
    var collection = db.get('contact');
    console.log('ho');

    //submit to db
    collection.insert({
        //"variable" : htmlInputName
        "contactName": name
    }, function (err, doc) {
        if (err) {
            console.log('hum');
            //send error
            res.send("There was a problem adding your information to the database.");
        } else {
            console.log('yeah!');
            //forword to next page
            res.redirect('/');
        }
    });
});


///* GET Userlist page. */
//router.get('/userlist', function (req, res) {
//    var db = req.db;
//    var collection = db.get('usercollection');
//    collection.find({}, {}, function (e, docs) {
//        res.render('userlist', {
//            "userlist": docs
//        });
//    });
//});



module.exports = router;

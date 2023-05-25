var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js')

// serve up the static files from public directory...goes to index.html by default
app.use(express.static('public'));
app.use(cors());

// route to create new users
app.get('/account/create/:name/:email/:password', function (req, res) {
        // esle create user
        dal.create(req.params.name, req.params.email, req.params.password)
        .then((user) => {
            console.log(user);
            res.send(user);
        });

    // res.send( {
    //     name: req.params.name,
    //     email: req.params.email,
    //     password: req.params.password
    // });
});

// login User
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email: req.params.email,
        password: req.params.password
    });
});

// all accounts
app.get('/account/all', function (req, res) {
        
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);       
        });

    // res.send ({
    //     name: 'michael',
    //     email: 'michael@mike.edu',
    //     password: 'secretly79'
    // });
});

// Deposit page
app.get('/deposit/', function (req, res) {
    res.send("deposit page")
});

// Withdraw page
app.get('/withdraw/', function (req, res) {
    res.send("withdraw page")
});

// Balance page
app.get('/balance/', function (req, res) {
    res.send("balance page")
});

// All Data page
app.get('/alldata/', function (req, res) {
    res.send("All Data page")
});


var port = 3000;
app.listen(port);
console.log('Run run running on Porto 3000');
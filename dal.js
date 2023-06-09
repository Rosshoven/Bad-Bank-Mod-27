// dal = data abstraction layer
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
let db = null;

// connect to Mongo
MongoClient.connect(uri, {useUnifiedTopology: true}, function (err, client) {
    console.log('Connected successfully to db server');

    // connect to my project database
    db = client.db('mybandbankproject');

});

// create user Account
function create (name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {writeConcern:1}, function (err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}

// all users
function all() {
    return new Promise((resolve, reject) => {
        const customers = db.collection('users').find({}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
    })
}

module.exports = {create, all};

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/userData');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (err, res) {
})
let query = db.signup.findOne();
console.log(query);

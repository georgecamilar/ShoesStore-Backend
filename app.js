const express = require('express')
const bodyParser = require('body-parser')
const shoes = require('./routes/shoes.route')
const users = require('./routes/users.route')
const app = express();


//database initializer
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://user:pass123@ds111425.mlab.com:11425/store'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error',console.error.bind(console,'Mongodb connection error:'));


//body parser -> translates incoming objects 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/shoes',shoes);
app.use('/users',users);

let port = 1234;
app.listen(port,()=>{
    console.log('Server is up and running on port:' + port);
});

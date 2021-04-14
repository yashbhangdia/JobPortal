const express = require('express');
const bodyParser = require('body-parser');

const Applicant = require('./routes/Applicant'); // Imports routes for the Applicants
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
var url = "mongodb+srv://dreamteam123:dreamteam123@cluster0.kemuc.mongodb.net/test";
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/Applicants', Applicant);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
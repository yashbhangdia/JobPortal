const express = require('express');
const cors = require('cors');
const passport = require("passport");

const Applicant = require('./routes/Applicant'); // Imports routes for the Applicants
const Company = require('./routes/Company'); // Imports routes for the Companies

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
var url = require("./config/keys").mongoURI;
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors({
	origin: "http://localhost:3000",
}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(passport.initialize());
require("./config/passport")(passport);

app.use('/Applicant', Applicant);
app.use('/Company', Company);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
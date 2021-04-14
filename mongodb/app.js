const express = require('express');
const app = express();
const cors = require('cors');

const Applicant = require('./routes/Applicant'); // Imports routes for the Applicants
const Company = require('./routes/Company'); // Imports routes for the Companies

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

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/Applicant', Applicant);
app.use('/Company', Company);

app.use(cors({
	origin: "http://localhost:3000",
}));

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
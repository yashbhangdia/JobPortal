var Applicant = require('../models/Applicant');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.Applicant_create = function (req, res) {
    
    var applicant = new Applicant(
        {
            Applicant_Id: req.body.Applicant_Id,
            name: req.body.name,
            age: req.body.age
        }
    );
    
    applicant.save(function (err) {
        if (err) {
            console.log(err);
        }
        res.send('Applicant Created successfully')
    })
};

exports.Applicant_details = function (req, res) {
    //console.log(req.params);
    Applicant.findOne({name: req.params.name}, function (err, applicant) {
        if (err) console.log(err);
        res.send(applicant);
    })
};

exports.Applicant_update = function (req, res) {
    Applicant.findOneAndUpdate({name: req.params.name}, {$set: req.body}, function (err, applicant) {
        if (err) console.log(err);
        res.send('Applicant udpated.');
    });
};

exports.Applicant_delete = function (req, res) {
    Applicant.findOneAndDelete({name: req.params.name}, function (err) {
        if (err) console.log(err);
        res.send('Deleted successfully!');
    })
};
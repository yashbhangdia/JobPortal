var Applicant = require('../models/Applicant');
var alert = require('alert');

exports.Applicant_create = function (req, res) {
    
    var applicant = new Applicant(
        {
            Applicant_Id: 0,
            name: req.body.name,
            age: req.body.age
        }
    );
    
    applicant.save(function (err) {
        if (err) {
            console.log(err);
        }
        alert('Applicant Created successfully');
        res.redirect("http://localhost:3000/dummy");
    })
};

exports.Applicant_details = function (req, res) {
    Applicant.findOne({name: req.params.Applicant_Id}, function (err, applicant) {
        if (err) console.log(err);
        res.send(applicant);
    })
};

exports.Applicant_update = function (req, res) {
    Applicant.findOneAndUpdate({name: req.params.Applicant_Id}, {$set: req.body}, function (err, applicant) {
        if (err) console.log(err);
        alert('Applicant details updated successfully');
        res.redirect("http://localhost:3000/dummy");
    });
};

exports.Applicant_delete = function (req, res) {
    Applicant.findOneAndDelete({name: req.params.Applicant_Id}, function (err) {
        if (err) console.log(err);
        alert('Applicant Deleted successfully');
        res.redirect("http://localhost:3000/dummy");
    })
};
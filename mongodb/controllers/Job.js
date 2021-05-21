var Job = require('../models/Job');
var alert = require('alert');

exports.Job_create = function (req, res) {
    
    var job = new Job(
        {
            
        }
    );
    
    job.save(function (err) {
        if (err) {
            console.log(err);
        }
        alert('Job Created successfully');
        res.redirect("http://localhost:3000/");
    })
};

exports.Job_details = function (req, res) {
    Job.findOne({_id: req.params.jid}).then((data) => {
        return res.json(data);
    })
    .catch((error) => {
        console.log('error: ', error);
    });
};

exports.Job_update = function (req, res) {
    Job.findOneAndUpdate({_id: req.params.jid}, {$set: req.body}, function (err, job) {
        if (err) console.log(err);
        alert('Applicant details updated successfully');
        res.redirect("http://localhost:3000/dummy");
    });
};

exports.Job_delete = function (req, res) {
   	Job.findOneAndDelete({_id: req.params.jid}, function (err) {
        if (err) console.log(err);
        alert('Applicant Deleted successfully');
        res.redirect("http://localhost:3000/dummy");
    })
};

exports.Job_details_all = function (req, res) {
    Job.find({}).then((data) => {
        return res.json(data);
    })
    .catch((error) => {
        console.log('error: ', error);
    });
};
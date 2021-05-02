var Applicant = require('../models/Applicant');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

exports.Applicant_create = function (req, res) {
    Applicant.findOne({ name: req.body.name }).then(applicant => {
        if (applicant) {
          return res.status(400).json({ name: "Name already exists" });
        }
        else
        {
          const newUser = new Applicant({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phoneno: req.body.phoneno
          });
          //Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(applicant => res.json(applicant))
                .catch(err => console.log(err));
            });
          });
        }
      });
};

exports.Applicant_login = function (req, res) {
  
    const password = req.body.password;

    Applicant.findOne({name: req.body.name}).then(applicant => {
        // Check if user exists
        if (!applicant) {
          return res.status(400).json({ nameNotFound: "Name not found" });
        }

        bcrypt.compare(password, applicant.password).then(isMatch => {
            if (isMatch) {
            // User matched
            // Create JWT Payload
                const payload = {
                    id: applicant.Applicant_Id,
                    name: applicant.name
                };
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res
                        .status(200)
                        .json({
                        success: true,
                        token: "Bearer " + token
                        });
                    }
                );
                //res.redirect("http://localhost:3000/Dashboard");
            }
            else 
            {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
                //res.redirect("http://localhost:3000/");
        });
    });
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
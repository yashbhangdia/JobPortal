const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var counterSchema = require('./counter');

let ApplicantSchema = new Schema({
    Applicant_Id: {type: Number, require:true},
    name: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    email: {type:String, required:true},
    phoneno: {type:String}
});

const Counter = mongoose.model('Counter', counterSchema, "A_Counter");

ApplicantSchema.pre('save', function(next) {
    var curr = this;
    Counter.findOneAndUpdate({Id: "id"}, {$inc: { seq: 1}}, {new: true, upsert: true}).then(function(doc) {
		curr.Applicant_Id = doc.seq;
		next();
    })
    .catch(function(error) {
        console.error("counter error-> : "+error);
        throw error;
    });
});

// Export the model
const Applicant = mongoose.model('Applicant', ApplicantSchema, 'Applicant');
module.exports = Applicant;
/*Connection*/
const mongoose = require('mongoose');
const url = "mongodb+srv://dreamteam123:dreamteam123@cluster0.kemuc.mongodb.net/DreamJob";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

/*Schema*/
const counterSchema = new mongoose.Schema({
    Company_Id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});

const companySchema = new mongoose.Schema({
	Company_Id : {type: Number, require:true},
	Company_Name : String,
	Domain : String,
	About_Us : String,
	Location : String,
	Contact : String,
	Email_Id : String
});

const Counter = mongoose.model('Counter', counterSchema);


companySchema.pre('save', function(next) {
    var curr = this;
    Counter.findOneAndUpdate({Company_Id: "id"}, {$inc: { seq: 1}}, {new: true, upsert: true}).then(function(doc) {
        console.log("...value: "+doc.seq);
		curr.Company_Id = doc.seq;
		next();
    })
    .catch(function(error) {
        console.error("counter error-> : "+error);
        throw error;
    });
});

const Company = mongoose.model('Company', companySchema, 'Company');

const company = new Company({
	"Company_Id": 1,
	"Company_Name": "NRDY Pvt. Ltd.",
    "Domain": "Software Consultancy",
    "About_Us": "We are a group of highly motivated professionals leveraging our skills for providing software oriented solutions to our clients. Our solutions range from designing to delivering end-to-end software products.",
    "Location": "Pune, Maharashtra",
    "Contact": "8758259783",
    "Email_Id": "nrdy@gmail.com"
});


company.save(function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("Done");
		mongoose.connection.close();
	}
});
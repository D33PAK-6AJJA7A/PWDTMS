const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tender = require("./tender").schema;

const ProjectSchema = new Schema({
    name: String, //display
    prjStartDate: String, //display
    prjEndDate: String,
    tenderStartDate: String,
    tenderEndDate: String, //display
    expBudget: String, //display
    location: String, 
    details: String,
    link: String,  
    final_tender: {type: tender},
    tenders: [{type: tender}],
    status: Number, //0 1 2 3    
});

module.exports = mongoose.model("Project", ProjectSchema);





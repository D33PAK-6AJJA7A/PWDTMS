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
    approved: Number,
    tenders: [{type: tender}],
});

module.exports = mongoose.model("Project", ProjectSchema);





const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TenderSchema = new Schema({
    project_id: String,
    contractor: String,
    Budget: String,
    timelineStart: String,
    timelineEnd: String,
    materaial: String,
    pic: String,
    doc: [{type: String}],
    pastProjects: [{type: String}],
    approved: Number, //0 - applied , 1- pwd approved, 2- govt approved, -1 - rejected
});

module.exports = mongoose.model("Tender", TenderSchema);





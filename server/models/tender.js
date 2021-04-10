const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TenderSchema = new Schema({
    contractor: String,
    Budget: String,
    timelineStart: String,
    timelineEnd: String,
    materaial: String,
    pic: String,
    doc: [{type: String}],
    pastProjects: [{type: String}],
});

module.exports = mongoose.model("Tender", TenderSchema);





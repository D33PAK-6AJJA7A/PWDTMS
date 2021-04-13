const router = require("express").Router();
const Tender = require("../models/tender");

// POST request - create a new card
router.post("/tenders", async (req, res) => {
  try
  {
    let tender = new Tender();
    tender.contractor = req.body.contractor;
    tender.Budget = req.body.Budget;
    tender.timelineStart = req.body.timelineStart;
    tender.timelineEnd = req.body.timelineEnd;
    tender.materaial = req.body.materaial;
    tender.pic = req.body.pic;
    tender.doc = [];
    tender.pastProjects = [];
    await tender.save();

    res.json({
      status: true,
      message: "Successfully saved",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get all tenders
router.get("/tenders", async (req, res) => {
  try {
    let tenders = await Tender.find().exec();

    res.json({
      success: true,
      tenders: tenders,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get a single tender
router.get("/tenders/:id", async (req, res) => {
  try {
    let tender = await Tender.findOne({ _id: req.params.id });
    res.json({
      success: true,
      tender: tender,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT request - update a single tender
router.put("/tenders/:id", async (req, res) => {
  try {
    let tender = await Tender.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
            contractor : req.body.contractor,
            Budget : req.body.Budget,
            timelineStart : req.body.timelineStart,
            timelineEnd : req.body.timelineEnd,
            materaial : req.body.materaial,
            pic : req.body.pic,
            doc : req.body.doc,
            pastProjects : req.body.pastProjects,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updateTender: tender,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// DELETE request - delete a single tender
router.delete("/tenders/:id", async (req, res) => {
  try {
    let deleteTender = await Tender.findOneAndDelete({ _id: req.params.id });

    if (deleteTender) {
      res.json({
        status: true,
        message: "Successfuly deleted!",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;

const router = require("express").Router();
const Project = require("../models/project");

// POST request - create a new card
router.post("/projects", async (req, res) => {
  try {
    let project = new Project();
    project.name = req.body.name; 
    project.prjStartDate = req.body.prjStartDate;
    project.prjEndDate = req.body.prjEndDate;
    project.tenderStartDate = req.body.tenderStartDate;
    project.tenderEndDate = req.body.tenderEndDate;
    project.expBudget = req.body.expBudget;
    project.location = req.body.location;
    project.details = req.body.details;
    project.link = req.body.link;
    project.approved = req.body.approved;
    project.tenders = [];
    await project.save();

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

// GET request - get all interncards
router.get("/projects", async (req, res) => {
  try {
    let projects = await Project.find().exec();

    res.json({
      success: true,
      projects: projects,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get a single interncard
router.get("/projects/:id", async (req, res) => {
  try {
    let project = await Project.findOne({ _id: req.params.id });
    res.json({
      success: true,
      project: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT request - update a single interncard
router.put("/projects/:id", async (req, res) => {
  try {
    let project = await Project.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
           name : req.body.name,
            prjStartDate : req.body.prjStartDate,
            prjEndDate : req.body.prjEndDate,
            tenderStartDate : req.body.tenderStartDate,
            tenderEndDate : req.body.tenderEndDate,
            expBudget : req.body.expBudget,
            location : req.body.location,
            details : req.body.details,
            link : req.body.link,
            approved : req.body.approved,
            tenders : req.body.tenders,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updateProject: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// DELETE request - delete a single interncard
router.delete("/projects/:id", async (req, res) => {
  try {
    let deleteProject = await Project.findOneAndDelete({ _id: req.params.id });

    if (deleteProject) {
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

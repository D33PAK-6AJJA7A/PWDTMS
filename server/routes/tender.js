const router = require("express").Router();
const Tender = require("../models/tender");
const Project = require("../models/project")
const User = require("../models/user")

// POST request - create a new card
router.post("/tenders", async (req, res) => {
  try
  {
    let project1 = await Project.findOne({ _id: req.body.project_id });
    let arr = project1.tenders;
    
    let tender = new Tender();
    tender.project_id = req.body.project_id;
    tender.contractor_id = req.body.contractor_id;
    tender.Budget = req.body.Budget;
    tender.timelineStart = req.body.timelineStart;
    tender.timelineEnd = req.body.timelineEnd;
    tender.material = req.body.material;
    tender.approved =  req.body.approved;   
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i].contractor_id === tender.contractor_id)
      {
        throw "contrator tender already exists";
      }
    }
    await tender.save();
    arr.push(tender);
    let project = await Project.findOneAndUpdate(
      { _id: req.body.project_id },
      {
        $set: {
            tenders :  arr
        },
      },
      { upsert: true }
    );
    await project.save();
    let user1 = await User.findOne({ _id: req.body.contractor_id });
    let arr1 = user1.my_projects;
    arr1.push(tender);
    //console.log(arr1);
    let user = await User.findOneAndUpdate(
      { _id: req.body.contractor_id },
      {
        $set: {
            my_projects: arr1
        },
      },
      { upsert: true }
    );
    await user.save(); 
    res.json({
      status: true,
      message: "Successfully saved",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
    
      success: false,
      message: err,
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
            project_id : req.body.project_id,
            contractor_id : req.body.contractor_id, 
            Budget : req.body.Budget, 
            timelineStart : req.body.timelineStart,
            timelineEnd : req.body.timelineEnd,
            material : req.body.material,
            approved: req.body.approved,
        },
      },
      { upsert: true }
    );
    let project = await Project.findOneAndUpdate(
      { _id: req.body.project_id },
      {
        $set: {
            tenders :  tenders.append(tender)
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

// PUT request - update a single tender


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

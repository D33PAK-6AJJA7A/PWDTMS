const router = require("express").Router();
const User = require("../models/user");
const jwt = require('jsonwebtoken');

router.get('/confirmation/:token', async (req, res) => { 
  try {
    let user;
      jwt.verify(req.params.token, process.env.SECRET, (err,decoded) => {
        if(err){
            res.json({
                success: false,
                message: "Failed to confirm account"
            });
        } else {
            user = decoded;
            
        }
    });
    console.log(user);
    if(user){
      
      await User.findOneAndUpdate(
        { _id: user._id },
        {
          $set: {
             confirmed : true, 
          },
        },
        { upsert: true }
      );
    }
    } catch (e) {
      res.send('error');
    }
  
    return res.redirect('http://localhost:8080/login');
  }); 

module.exports = router;

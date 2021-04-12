const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verify-token');

// /* Signup Route */
router.post('/auth/signup',async(req,res) => {
    if(!req.body.email || !req.body.password) {
        res.json({success: false, message: "Please Enter email or password"});
    }
    // else if(!req.body.email.endsWith("iiita.ac.in"))
    // {
    //     res.json({success: false, message: "Email not in organization. Enter valid email"});
    // }
    else {
        try {
            let foundUser = await User.findOne({ email: req.body.email});
            if(foundUser) {
                res.status(403).json({
                    success: false,
                    message: "User already exists."
                });
                return;
            }
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            newUser.role = req.body.role; //request has to send role (possible roles : 'pwd','contractor', 'govt'
            await newUser.save();
            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: 604800 // 1 week
            });
            res.json({
                success: true,
                token: token,
                message: "Successfully created a new user with role: "+req.body.role,
            });
        } catch(err){
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
});
//
router.post('/auth/adminsignup',async(req,res) => {
    if(!req.body.email || !req.body.password) {
        res.json({success: false, message: "Please Enter email or password"});
    } else {
        try {
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            newUser.role = "admin";
            await newUser.save();
            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: 604800 // 1 week
            });

            res.json({
                success: true,
                token: token,
                message: "Successfully created a new admin :)",
            });
        } catch(err){
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
});
/* Login Route */
router.post("/auth/login", async(req,res) => {
    try{
        let foundUser = await User.findOne({ email: req.body.email});
        // console.log(foundUser);
        if(!foundUser){
            res.status(403).json({
                success: false,
                message: "Authentication failed, User not found"
            });
        } else {
            if(foundUser.password === req.body.password) {
                let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    role: foundUser.role,
                    token: token
                });
            } else {
                res.status(403).json({
                    success: false,
                    message: err.message
                });
            }
        }
    } catch(error) {
        // console.log(req.body);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


module.exports = router;
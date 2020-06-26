const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../config/middleware/auth')
const { check, validationResult } = require('express-validator');
 
const User = require('../models/User');

// @rout  GET api/auth
//@desc   Get logged in user
//@access Private

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);//jsonwebtocken find the user by id//give me .select('-password')
    console.log(user)
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @rout  POST api/auth
// @desc   Auth user & get token
// @access Public

router.post('/', 
[
  check('email','please include a valid email').isEmail(),// express validator did check
  check('password', 'Password is required').exists()  
],
async (req,res)=>{
  console.log("hey user! its from backEnd")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password}= req.body;

    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:'invalid Credential'})
        }
        const isMatch = await bcrypt.compare(password,user.password)// password checker
        if(!isMatch){
            return res.status(400).json({msg:'invalid Credential'})
        }
        const payload = { // MongooDB 
            user: {
              id: user.id, //the same as_id because of moongoos
            },
          };
     // generating JWT tockn  it has three parts 1.what kind of encryption do you need,
     //2.paylode/the id or name orany thing you pass ,3.the secrate /most important
          jwt.sign(
            payload,
            config.get('jwtSecret'),//roundom number
            {
              expiresIn: 360000,//time the tokn expired
            },
            (err, token) => {
              if (err) throw err;
              res.json({ token });
            }
          );
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
        
    }
})
module.exports = router;
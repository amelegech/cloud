const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
 
const User = require('../models/User');
 
// @route     POST api/users
// @desc      Register a user
// @access    Public
 
router.post(
  '/',
  [
    check('userName', 'Please add userName').not().isEmpty(),//express validetor
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 3 or more characters'
    ).isLength({ min: 3 }),
  ],
 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.bdy) 
     
    const { userName, email, password } = req.body;// destructuring properties 
 
    try {
      let user = await User.findOne({ email });// returen promise wait for the result
 
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
 
      user = new User({
        userName,
        email,
        password,
      });
 
      const salt = await bcrypt.genSalt(10);
 
      user.password = await bcrypt.hash(password, salt);// make the password abstract using salt
 
      await user.save();
     
 
      const payload = { 
        user: {
          id: user.id,
        },
      };
  /// generating Token for user name & password
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          //expire after this time
          expiresIn: 360000, 
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
 
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
 
module.exports = router;















//////////////////////////////////
// const express = require("express");
// const router = express.Router();
// const bcrypt= require('bcryptjs');
// // const jwt= require('jsonwebtoken');
// const {check,validationResult}= require('express-validator')

// const User =require('../models/User')




// router.post('/',(req,res)=>{
//   res.send('Userssss contacts')
// })

//handl post API
//handl users
// handl the users to access
//router.post ('/',) 
// [
//   check('name','Please enter your name ')
//     .not()
//     .isEmpty(),
//     check('email','Please enter valid email')
//     .isEmail(),
//     check('password','Please inter password with 6 or more tcharacters')
//     .isLength({min:6})
// ],
//  async (req,res)=>{
//    //res.send('add  users to list')
//    //res.send(req.body)
//    const errors =validationResult(req);
//    if(!errors.isEmpty()){
//     return res.status(400).json({errors:errors.array() })
//    }
//   //res.send('work')
//   const {name, email, password} = req.body;
//   try {
//    let user = await  User.findOne({email});
//    if(user){
//      return res.status(400).json({msg:'user already exist'});
//    } 
//    user= new User({
//      name,
//      email,
//      password
//    });
//    const salt = await bcrypt.genSalt(10)// protect the password;
//     user.password = bcrypt.hash(password,salt);
//     await user.save();
//     res.send('User save');
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('server why Error')
    
//   } 
//})





//module.exports= router;
var express = require('express');
var router = express.Router();
const post = require("../controller/postController")
const bcrypt = require("bcryptjs")
const usermodel = require("../models/userModel")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.get("/post",verifyToken,(req,res) => {
  //res.render("form",{title:"form"})
//})
router.post("/post",post.createPost)
router.delete("/post/:id",post.deletePost)
router.post("/yee", async (req, res) => {
  const { username, password } = req.body;

  try {
  
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new usermodel({
      username: username,
      password: hashedPassword,
    });

  
    await newUser.save();

    res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



module.exports = router;
 
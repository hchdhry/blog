var express = require('express');
var router = express.Router();
const post = require("../controller/postController")
const bcrypt = require("bcryptjs")
const usermodel = require("../models/userModel")
const passprt = require("../logic/passport")
const {generateToken,verifyToken} = require("../logic/jwt")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.get("/post",verifyToken,(req,res) => {
  //res.render("form",{title:"form"})
//})
router.get("/post",post.fetchPost)
router.post("/post",verifyToken,post.createPost)
router.delete("/post/:id",post.deletePost)
router.post("/login", (req, res, next) => {
  passprt.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err); 
    }
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    req.logIn(user, (err) => {
      const { _id, username } = user;
      if (err) {
        return next(err);
      }
      return res.status(200).json({ message: "Authentication successful", user:{_id,username,"token":generateToken(_id)}});
    });
  })(req, res, next);
});

module.exports = router;
 
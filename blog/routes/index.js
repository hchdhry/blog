var express = require('express');
var router = express.Router();
const post = require("../controller/postController")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.get("/post",verifyToken,(req,res) => {
  //res.render("form",{title:"form"})
//})
router.post("/post",post.createPost)




module.exports = router;
 
var express = require('express');
var router = express.Router();
const post = require("../controller/postController")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/test",(req,res) => {
  res.json({yee:"hello"})
})

module.exports = router;
 
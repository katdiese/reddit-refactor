var express = require('express');
var router = express.Router();


//GET all information for posts
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//POST new post

//POST new comment

//POST like




module.exports = router;

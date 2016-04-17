var express = require('express');
var router = express.Router();
var queries = require('../../../queries');



//GET all posts
router.get('/', function(req, res, next) {
  queries.getPosts()
  .then(function(data) {
    res.status(200)
    .json({
      data: data,
      message: 'hi you got here'
    })
  })
});

//GET all comments for one post
router.get('/posts/:id', function(req, res, next) {
  queries.getPostCommentsAndUser(req.params.id)
  .then(function(data) {
    res.status(200)
    .json({
      data: data,
      message: 'woohoo'
    })
  })
});

//POST new post


//POST new comment

//POST like




module.exports = router;

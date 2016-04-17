app.controller('postsController', ['$scope', 'postService', function($scope, postService) {
  $scope.showNewForm = false;
  $scope.post = {};
  $scope.commentsForm = false;
  $scope.comments = false;
  $scope.comment = {};
  $scope.displayNewForm = function() {
    $scope.showNewForm = !$scope.showNewForm;
  }
  $scope.getAllPosts = function() {
    postService.getAllPosts()
    .then(function(posts) {
      console.log(posts.data.data);
      $scope.posts = posts.data.data;
    })
  }
  $scope.addPost = function(post) {
    postService.addPost(post)
    .then(function() {
      $scope.post = {};
      $scope.showNewForm = false;
      $scope.getAllPosts();
    })
  }
  $scope.showCommentsForm = function() {
    this.commentsForm = !this.commentsForm;
  }
  $scope.getComments = function(id) {
    this.comments = !this.comments;
    if(this.comments === true) {
      postService.getComments(id)
      .then(function(comments) {
        console.log(comments.data.data);
        $scope.allComments = comments.data.data;
      });
  }
  }
  $scope.addComment = function(post_id, comment) {
    postService.addComment(post_id, comment)
    .then(function() {
      $scope.getComments(post_id);
      $scope.comment = {};
    });
  }

  $scope.getAllPosts();
}]);
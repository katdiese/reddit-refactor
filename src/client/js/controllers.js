app.controller('postsController', ['$scope', 'postService', function($scope, postService) {
  $scope.showNewForm = false;
  $scope.post = {};
  $scope.comments = false;
  $scope.comment = {};
  $scope.displayNewForm = function() {
    $scope.showNewForm = !$scope.showNewForm;
  }
  $scope.getAllPosts = function() {
    postService.getAllPosts()
    .then(function(posts) {
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
  $scope.showComments = function() {
    console.log(this.comments);
    this.comments = !this.comments;
  }

  $scope.getAllPosts();
}]);
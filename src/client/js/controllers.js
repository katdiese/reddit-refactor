app.controller('postsController', ['$scope', 'postService', function($scope, postService) {
  $scope.showNewForm = false;
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
      $scope.getAllPosts();
    })
  }

  $scope.getAllPosts();
}]);
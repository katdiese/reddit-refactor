app.controller('postsController', ['$scope', 'postService', function($scope, postService) {
  $scope.getAllPosts = function() {
    postService.getAllPosts()
    .then(function(posts) {
      $scope.posts = posts.data.data;
    })
  }

  $scope.getAllPosts();
}]);
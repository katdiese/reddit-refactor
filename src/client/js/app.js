var app = angular.module('reddit-refactor', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../partials/main.html',
    controller: 'postsController'
  })
})
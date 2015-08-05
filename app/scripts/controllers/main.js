'use strict';

/**
 * @ngdoc function
 * @name geekAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geekAngularApp
 */
angular.module('geekAngularApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.blogs = []; 
    $scope.refreshBlog = function(){
      $http.get('http://localhost:9001/blogs').then(
      function(response){ 
        $scope.blogs =  response.data;
        
      } , function(response){
        $scope.error='service not available';
      });
    };

    $scope.refreshBlog();

    $scope.createNewBlogPost = function(){
    	var newPost = {
          title: $scope.title,
          content:$scope.content,
          post_by:"eJeab",
          comments:[]
      }

      $http.post('http://localhost:9001/blogs', newPost).then(
        function(){
          $scope.refreshBlog();
        }
      );

      $scope.title = '';
      $scope.content = '';
    }
  });

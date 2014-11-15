(function() {
  var app;

  angular.module('quizApp', ['ngMaterial', 'ngRoute']);

  app = angular.module('quizApp');

  app.controller('YourController', ['$scope', '$location',function($scope, $location){ 
    $scope.goNext = function (hash) { 
      $location.path(hash);
    }
  }]);


}).call(this);

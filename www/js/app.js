(function() {
  // var app;

  // angular.module('quizApp', ['ngMaterial', 'ngRoute']);

  var app = angular.module('quizApp', ['ngMaterial', 'ngRoute', 'ui.router']);

  app.controller('YourController', ['$scope', '$location',function($scope, $location){ 
    $scope.goNext = function (hash) { 
      $location.path(hash);
    }
  }]);

  app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('bundles', {
      url: "/bundles",
      templateUrl: "views/browse_bundles/browse_bundles.html"
    })
    .state('quizzing', {
      url: "/quizzing",
      templateUrl: "views/quizzing/quizzing.html"
    })
    .state('home', {
      url: "/home",
      templateUrl: "views/home/home.html"
    })
    .state('topics', {
      url: "/topics",
      templateUrl: "views/topics/topics.html"
    })
    .state('topics.list', {
      url: "/list",
      views:{ 
        "content": {
          templateUrl: "views/topics/topicsList.html",
          controller: function($scope) {
            $scope.items = ["A", "List", "Of", "Items"];
          }
        }
      }
    // RUBY
    }).state('topics.list2', {
      url: "/list",
      views:{ 
        "content2": {
          templateUrl: "views/topics/topicsList.html",
          controller: function($scope) {
            $scope.items = ["A", "SECOND", "list","Of", "Items"];
          }
        }
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "views/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "views/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
  });


}).call(this);

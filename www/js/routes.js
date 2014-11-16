app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "views/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "views/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
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

// (function() {
//   var app;

//   app = angular.module('quizApp');

//   app.config([
//     '$routeProvider', function($routeProvider) {
//       $routeProvider
//       .when("/", {
//         templateUrl: "views/home/index.html.jade",
//         controller: "HomeCtrl"
//       })
//       .when("/onboarding", {
//         templateUrl: "views/onboarding/onboarding.html.jade",
//         controller: "OnboardingCtrl"
//       })
//       .when("/quizzing", {
//         templateUrl: "views/quizzing/quizzing.html.jade",
//         controller: "QuizzingCtrl"
//       })
//       .when("/topics", {
//         templateUrl: "views/browse_topics/browse_topics.html.jade",
//         controller: "TopicsCtrl"
//       })
//       .when("/topics/:topicId", {
//         templateUrl: "views/browse_bundles/browse_bundles.html.jade",
//         controller: "BundleCtrl"
//       });
//     }]);

//   app.controller('HomeCtrl', function($scope) {
//     $scope.message = "In the HomeCtrl";
//   });

//   app.controller('TopicsCtrl', function($scope) {
//     $scope.message = "In the TopicsCtrl";
//   })

// })();
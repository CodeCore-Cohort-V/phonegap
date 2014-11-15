(function() {
  var app;

  app = angular.module('quizApp');

  app.config([
    '$routeProvider', function($routeProvider) {
      $routeProvider
      .when("/", {
        templateUrl "../views/home/index.html.jade",
        controller: "HomeCtrl"
      })
      .when("/onboarding", {
        templateUrl: "../views/onboarding/onboarding.html.jade",
        controller: "OnboardingCtrl"
      })
      .when("/quizzing", {
        templateUrl: "../views/quizzing/quizzing.html.jade",
        controller: "QuizzingCtrl"
      })
      .when("/topics", {
        templateUrl: "../views/browse_topics/browse_topics.html.jade",
        controller: "TopicsCtrl"
      })
      .when("/topics/:topicId", {
        templateUrl: "../views/browse_bundles/browse_bundles.html.jade",
        controller: "BundleCtrl"
      });
    }]);

  app.controller('HomeCtrl' function($scope) {
    $scope.message = "In the HomeCtrl";
  });

  app.controller('TopicsCtrl', function($scope) {
    $scope.message = "In the TopicsCtrl";
  })

})();
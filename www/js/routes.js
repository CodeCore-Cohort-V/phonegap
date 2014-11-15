(function() {
  var app;

  app = angular.module('quizApp');

  app.config([
    '$routeProvider', function($routeProvider) {
      $routeProvider
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

})();
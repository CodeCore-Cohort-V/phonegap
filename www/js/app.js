(function() {
  // var app;

  // angular.module('quizApp', ['ngMaterial', 'ngRoute']);

  var app = angular.module('quizApp', ['ngMaterial', 'ngRoute', 'ui.router', 'ngAnimate']);

  // app.controller('mainCtrl', [
  //   '$scope', 'apiQuestionsFactory', function($scope, apiQuestionsFactory) {
  //     var getQuestions, vm;
  //     vm = $scope;
  //     vm.bundleId;
  //     getQuestions = apiQuestionsFactory;
  //     vm.setBundleId = function(id) {
  //       vm.bundleId = id;
  //       return vm.questions = getQuestions();
  //     };
  //     return true;
  //   }
  // ]);

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
    // ANGULAR
    .state('topics.list1', {
      url: "/list/11",
      views:{ 
        "content1": {
          templateUrl: "views/topics/topicsList.html",
          controller: function($scope, apiBundlesFactory) {
            getBundles = apiBundlesFactory;
            $scope.bundles = getBundles(1);
          }
        }
      }
    })
    // RUBY
    .state('topics.list2', {
      url: "/list/2",
      views:{ 
        "content2": {
          templateUrl: "views/topics/topicsList.html",
          controller: function($scope, apiBundlesFactory) {
            getBundles = apiBundlesFactory;
            $scope.bundles = getBundles(2);
          }
        }
      }
    })
    // OOP
    .state('topics.list3', {
      url: "/list/3",
      views:{ 
        "content3": {
          templateUrl: "views/topics/topicsList.html",
          controller: function($scope, apiBundlesFactory) {
            getBundles = apiBundlesFactory;
            $scope.bundles = getBundles(3);
          }
        }
      }
    })
    // JS
    .state('topics.list4', {
      url: "/list/4",
      views:{ 
        "content4": {
          templateUrl: "views/topics/topicsList.html",
          controller: function($scope, apiBundlesFactory) {
            getBundles = apiBundlesFactory;
            $scope.bundles = getBundles(4);
          }
        }
      }
    })    
    // HTML5
    .state('topics.list5', {
      url: "/list/5",
      views:{ 
        "content5": {
          templateUrl: "views/topics/topicsList.html",
          controller: function($scope, apiBundlesFactory) {
            getBundles = apiBundlesFactory;
            $scope.bundles = getBundles(5);
          }
        }
      }
    })    
    // CSS3
    .state('topics.list6', {
      url: "/list/6",
      views:{ 
        "content6": {
          templateUrl: "views/topics/topicsList.html",
          controller: function($scope, apiBundlesFactory) {
            getBundles = apiBundlesFactory;
            $scope.bundles = getBundles(6);
          }
        }
      }
    });
  });


}).call(this);

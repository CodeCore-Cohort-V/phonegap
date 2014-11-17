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

    // ALL
    .state('topics.list', {
      url: "/list/:topicID", 
      views:{
        "content2": {
          templateUrl: "views/topics/topicsList.html",
          controller: function($scope, $stateParams, apiBundlesFactory){
            topicID = $stateParams.topicID
            getBundles = apiBundlesFactory;
            $scope.bundles = getBundles(topicID);
          }
        }
      }   
    });
    // // RUBY
    // .state('topics.list2', {
    //   url: "/list",
    //   views:{ 
    //     "content2": {
    //       templateUrl: "views/topics/topicsList.html",
    //       controller: function($scope, apiBundlesFactory) {
    //         getBundles = apiBundlesFactory;
    //         $scope.bundles = getBundles(2);
    //       }
    //     }
    //   }
    // })
    // // OOP
    // .state('topics.list3', {
    //   url: "/list",
    //   views:{ 
    //     "content3": {
    //       templateUrl: "views/topics/topicsList.html",
    //       controller: function($scope, apiBundlesFactory) {
    //         getBundles = apiBundlesFactory;
    //         $scope.bundles = getBundles(3);
    //       }
    //     }
    //   }
    // })
    // // JS
    // .state('topics.list4', {
    //   url: "/list",
    //   views:{ 
    //     "content4": {
    //       templateUrl: "views/topics/topicsList.html",
    //       controller: function($scope, apiBundlesFactory) {
    //         getBundles = apiBundlesFactory;
    //         $scope.bundles = getBundles(4);
    //       }
    //     }
    //   }
    // })    
    // // HTML5
    // .state('topics.list5', {
    //   url: "/list",
    //   views:{ 
    //     "content5": {
    //       templateUrl: "views/topics/topicsList.html",
    //       controller: function($scope, apiBundlesFactory) {
    //         getBundles = apiBundlesFactory;
    //         $scope.bundles = getBundles(5);
    //       }
    //     }
    //   }
    // })    
    // // CSS3
    // .state('topics.list6', {
    //   url: "/list",
    //   views:{ 
    //     "content6": {
    //       templateUrl: "views/topics/topicsList.html",
    //       controller: function($scope, apiBundlesFactory) {
    //         getBundles = apiBundlesFactory;
    //         $scope.bundles = getBundles(6);
    //       }
    //     }
    //   }
    // });
  });


}).call(this);

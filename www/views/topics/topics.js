(function() {
  var quizApp;

  quizApp = angular.module("quizApp");

  quizApp.factory('apiTopicsFactory', [
    '$http', function($http) {
      var getTopics, getTopics1, topics;
      topics = [
        {
          id: 2,
          name: "Ruby"
        }, {
          id: 3,
          name: "OOP"
        }, {
          id: 4,
          name: "JavaScript"
        }, {
          id: 5,
          name: "HTML5"
        }, {
          id: 6,
          name: "CSS3"
        }
      ];
      getTopics = function() {
        var list;
        list = [];
        $http.get("views/data/data.json").success(function(data) {
          return list = data.topics;
        }).error(function(data) {
          return false;
        });
        return list;
      };
      getTopics1 = function() {
        return topics;
      };
      return getTopics1;
    }
  ]);

  quizApp.factory('apiBundlesFactory', [
    '$http', function($http) {
      var bundles, getBundles;
      bundles = [
        {
          id: 1,
          topic_id: 2,
          name: "Ruby Basics",
          difficulty: "easy"
        }, {
          id: 2,
          topic_id: 2,
          name: "Ruby PRO",
          difficulty: "hard"
        }
      ];
      getBundles = function(topicId) {
        return _.filter(bundles, function(bundle) {
          return bundle.topic_id === topicId;
        });
      };
      return getBundles;
    }
  ]);

  quizApp.controller('TopicsListController', [
    'apiTopicsFactory', 'apiBundlesFactory', '$scope', function(apiTopicsFactory, apiBundlesFactory, $scope) {
      var getTopics, vm;
      vm = this;
      vm.message = 'Inside the topics controller';
      getTopics = apiTopicsFactory;
      vm.getBundles = apiBundlesFactory;
      return this.list = getTopics();
    }
  ]);

}).call(this);

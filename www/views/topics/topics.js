(function() {
  var quizApp;

  quizApp = angular.module("quizApp");

  quizApp.factory('apiTopicsFactory', function() {
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
      return topics;
    };
    getTopics1 = function(num) {
      topics.push(num);
      return topics;
    };
    return getTopics;
  });

  quizApp.factory('apiBundlesFactory', function() {
    var bundles, getBundles;
    bundles = [
      {
        id: 1,
        topicId: 1,
        name: "Ruby Basics",
        difficulty: "easy"
      }, {
        id: 2,
        topic_id: 1,
        name: "Ruby PRO",
        difficulty: "hard"
      }
    ];
    getBundles = function(topicId) {
      return _.filter(bundles, function(bundle) {
        if (bundle.id === topicId) {

        }
      });
    };
    return getBundles;
  });

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

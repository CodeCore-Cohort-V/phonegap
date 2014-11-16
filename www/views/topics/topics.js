(function() {
  var quizApp;

  quizApp = angular.module("quizApp");

  quizApp.factory('apiTopicsFactory', function() {
    var topics;
    topics = ["Ruby", "OOP", "JavaScript", "HTML5", "CSS3"];
    this.getTopics = function() {
      return topics;
    };
    return topics;
  });

  quizApp.constant('topicsList', ["Ruby", "OOP", "JavaScript", "HTML5", "CSS3"]);

  quizApp.controller('TopicsListController', [
    'apiTopicsFactory', '$scope', 'topicsList', function(apiTopicsFactory, topicsList, $scope) {
      this.message = 'Inside the topics controller';
      this.list = apiTopicsFactory;
      debugger;
    }
  ]);

}).call(this);

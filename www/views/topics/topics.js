(function() {
  var TopicsFactory, app;

  app = angular.module("quizApp");

  TopicsFactory = function() {
    var getTopics, topics;
    topics = ["Ruby", "OOP", "JavaScript", "HTML5", "CSS3"];
    getTopics = function() {
      return topics;
    };
    return topics;
  };

  app.factory('Topics', TopicsFactory);

  app.controller('TopicsListController', [
    'Topics', '$scope', function(Topics, $scope) {
      $scope.list = Topics.getTopics();
      $scope.message = 'Inside the topics controller';
      debugger;
    }
  ]);

}).call(this);

(function() {
  var app;

  app = angular.module("quizApp");

  app.factory('Topics', !function() {
    var getTopics, topics;
    topics = ["Ruby", "OOP", "JavaScript", "HTML5", "CSS3"];
    getTopics = function() {
      return topics;
    };
    return true;
  });

  app.controller('TopicsListController', [
    'Topics', '$scope', function(Topics, $scope) {
      $scope.list = Topics.getTopics();
      return $scope.message = 'Inside the topics controller';
    }
  ]);

}).call(this);

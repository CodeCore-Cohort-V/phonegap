app = angular.module "quizApp"


TopicsFactory = ->
  topics = ["Ruby", "OOP", "JavaScript", "HTML5", "CSS3"]

  getTopics = -> 
    return topics
  
  return topics

app.factory('Topics', TopicsFactory)
  

app.controller('TopicsListController', ['Topics', '$scope', (Topics, $scope)->
  $scope.list = Topics.getTopics()
  $scope.message = 'Inside the topics controller'
  debugger
  ])
app = angular.module "quizApp"

app.factory('Topics', !->
  topics = ["Ruby", "OOP", "JavaScript", "HTML5", "CSS3"]

  getTopics = -> 
    return topics
  
  return true
  )

app.controller('TopicsListController', ['Topics', '$scope', (Topics, $scope)->
  $scope.list = Topics.getTopics();
  $scope.message = 'Inside the topics controller'
  ])
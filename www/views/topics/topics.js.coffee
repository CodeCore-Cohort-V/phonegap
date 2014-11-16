quizApp = angular.module "quizApp"
  

quizApp.factory('apiTopicsFactory', ->
  topics = ["Ruby", "OOP", "JavaScript", "HTML5", "CSS3"]

  this.getTopics = -> 
    return topics
  
  return topics
  )

quizApp.constant('topicsList', ["Ruby", "OOP", "JavaScript", "HTML5", "CSS3"] )
  

quizApp.controller('TopicsListController', ['apiTopicsFactory', '$scope', 'topicsList', (apiTopicsFactory,topicsList, $scope)->
  this.message = 'Inside the topics controller'
  this.list = apiTopicsFactory
  debugger
  ])
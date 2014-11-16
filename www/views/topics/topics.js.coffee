quizApp = angular.module "quizApp"
  

quizApp.factory('apiTopicsFactory', ->
  topics = [{id: 2, name: "Ruby"}, {id: 3, name: "OOP"}, {id: 4 , name:"JavaScript"}, {id: 5 , name:"HTML5"}, {id: 6 , name:"CSS3"}]

  getTopics = -> 
    return topics

  getTopics1 = (num) -> 
    topics.push(num)
    return topics
  
  return getTopics
  )

quizApp.factory('apiBundlesFactory', ->
  bundles = [{id: 1, topic_id : 1, name: "Ruby Basics", difficulty: "easy"}, {id: 2, topic_id: 1, name: "Ruby PRO", difficulty: "hard"}]
  
  getBundles = (topicId) ->
    return _.where(bundles, (bundle)->
      return bundle.topic_id == topicId)
  return getBundles
  )

quizApp.controller('TopicsListController', ['apiTopicsFactory','apiBundlesFactory', '$scope', (apiTopicsFactory, apiBundlesFactory, $scope)->
  vm = this
  vm.message = 'Inside the topics controller'
  getTopics = apiTopicsFactory
  vm.getBundles = apiBundlesFactory
  this.list = getTopics()
  ])




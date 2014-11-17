quizApp = angular.module "quizApp"


quizApp.controller('mainCtrl', ['$scope', 'apiQuestionsFactory', ($scope, apiQuestionsFactory) ->
  vm = $scope
  vm.bundle
  getQuestions = apiQuestionsFactory
  vm.setBundleId = (bundle) ->
    vm.bundle = bundle
    vm.questions = getQuestions()


  return true
  ])
  

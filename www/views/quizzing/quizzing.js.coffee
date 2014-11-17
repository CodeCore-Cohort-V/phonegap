quizApp = angular.module "quizApp"


quizApp.controller('mainCtrl', ['$scope', 'apiQuestionsFactory', ($scope, apiQuestionsFactory) ->
  vm = $scope
  vm.bundle
  getQuestions = apiQuestionsFactory
  vm.setBundleId = (bundle) ->
    vm.message = "Foat the Goat"
    vm.bundle = bundle
    vm.questions = getQuestions()
    vm.length = vm.questions.length

  vm.setUpQuiz = ->
    vm.score = 0
    vm.index = 0
    vm.question = vm.questions[vm.index]
    return true
  
  vm.continueQuiz = ->
    vm.question = vm.questions[vm.index]

  vm.checkAnswer = (choice) ->
    if choice.correct
      score++
      showCorrect()
    else
      showCorrect()
    vm.index++
    vm.continueQuiz
    return true







  return true
  ])
  

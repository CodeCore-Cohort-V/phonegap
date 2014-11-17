(function() {
  var quizApp;

  quizApp = angular.module("quizApp");

  quizApp.controller('mainCtrl', [
    '$scope', 'apiQuestionsFactory', function($scope, apiQuestionsFactory) {
      var getQuestions, vm;
      vm = $scope;
      vm.bundle;
      getQuestions = apiQuestionsFactory;
      vm.setBundleId = function(bundle) {
        vm.message = "Foat the Goat";
        vm.bundle = bundle;
        vm.questions = getQuestions();
        return vm.length = vm.questions.length;
      };
      vm.setUpQuiz = function() {
        vm.score = 0;
        vm.index = 0;
        vm.question = vm.questions[vm.index];
        return true;
      };
      vm.continueQuiz = function() {
        return vm.question = vm.questions[vm.index];
      };
      vm.checkAnswer = function(choice) {
        if (choice.correct) {
          score++;
          showCorrect();
        } else {
          showCorrect();
        }
        vm.index++;
        vm.continueQuiz;
        return true;
      };
      return true;
    }
  ]);

}).call(this);

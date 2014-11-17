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
        return vm.questions = getQuestions();
      };
      return true;
    }
  ]);

}).call(this);

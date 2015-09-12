app.controller('HomeController', function($scope, HomeFactory) {
  $scope.showCreateForm = false;

  $scope.showGames = function() {
    HomeFactory.getGames().then();
  };
});

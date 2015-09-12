app.controller('createFormController', function($scope, HomeFactory) {
  $scope.createForm = {
    playerName: null,
    gameName: null,
  };

  $scope.createAGame = function() {
    console.log('hi');
    HomeFactory.createGame({name: $scope.createForm.gameName, players: [$scope.createForm.playerName]}).then(function(game) {
      console.log(game.name);
    });
  };
});

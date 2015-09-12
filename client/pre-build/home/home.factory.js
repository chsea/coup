app.factory('HomeFactory', function($http) {
  function createGame(game) {
    return $http.post('/api/modules/game/', game).then(function(res) {
      return res.data;
    });
  }

  return {
    createGame: createGame
  };
});

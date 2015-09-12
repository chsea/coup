app.controller('HomeController', function($scope, $http) {
  function Contessa() {
    this.title = 'Contessa';
  }

  function Duke() {
    this.title = 'Duke';
  }

  var deck = {
    cards: [
      new Contessa(),
      new Contessa(),
      new Contessa(),
      new Duke(),
      new Duke(),
      new Duke(),
    ]
  };

  $scope.players = [
    {
      name: 'player1',
      cards: [deck.cards[0], deck.cards[3]]
    },
    {
      name: 'player2',
      cards: [deck.cards[0], deck.cards[3]]
    }
  ];
});

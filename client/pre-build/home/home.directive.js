app.directive('player', function() {
  return {
    restrict: 'E',
    template: '<div class="player"><span class="name">{{ player.name }}:</span> <span ng-repeat="card in player.cards">{{ card.title}} </span>'
  };
});

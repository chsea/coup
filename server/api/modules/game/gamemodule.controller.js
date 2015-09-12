var mongoose = require('mongoose');
var Game = require('./gamemodule.model');

module.exports = {
  index: function (req, res) {
    Game
      .find({complete: false, inProgress: false})
      .exec()
      .then(function(games) {
        res.send(games);
      });
 },
 create: function(req, res, next) {
    Game
      .create(req.body)
      .then(function(game){
        res.send(game);
      });
  }
};

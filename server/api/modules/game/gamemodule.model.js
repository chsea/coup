//'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {type: String, required: true},
  players: [{type: String, required: true}],
  complete: {type: Boolean, required: true, default: false},
  inProgress: {type: Boolean, required: true, default: false}
});

module.exports = mongoose.model('Game', schema);

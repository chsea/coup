function Assassin() {
  this.name = 'Assassin';
  this.action = 'assassinate';
}

function Ambassador() {
  this.name = 'Ambassador';
  this.counter = 'stealing';
  this.action = 'exchange';
}

function Captain() {
  this.name = 'Captain';
  this.counter = 'stealing';
  this.action = 'stealing';
}

function Contessa() {
  this.name = 'Contessa';
  this.counter = 'assassinate';
}

function Duke() {
  this.name = 'Duke';
  this.counter = 'foreignAid';
  this.action = 'tax';
}

module.exports = {
  Ambassador: Ambassador,
  Assassin: Assassin,
  Captain: Captain,
  Contessa: Contessa,
  Duke: Duke,
};

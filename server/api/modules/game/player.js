
function Player(name, index){
	this.name = name;
	this.id = index;
	this.hand = new Array(2);
	this.coin = 0;
	this.actions = {
		block: block,
		callOut: callOut,
		income: income,
		foreignAid: foreignAid,
		coup: coup,
		giveUp: giveUp
	}
}

Player.prototype.action = function(action){
	return this.actions[action]();
}


var block = function(){

}

var callOut = function(){

}

var setCoins = function(action){
	var amount = {income: 1, foreignAid: 2, tax: 3, steal: 2, stolen: -2, assassin: -3, coup: -7};
	coin += amount[action];

}

var foreignAid = function(){
	
}

var coup = function(){

}

var giveUp = function(){

}
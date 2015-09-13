


var socket = io(window.location.href);


socket.on('connect', function(){
	console.log("Broswer - I have joined the game!!");
});

socket.on('sendActionToAll', function(currentPlayer, targetPlayer, action) {
  gameboard.emit(currentPlayer, targetPlayer, action);
});

gameboard.on('block', function(currentPlayer, targetPlayer){

  socket.emit('sendBlockToServer', currentPlayer, targetPlayer);
});

gameboard.on('callOut', function(currentPlayer, targetPlayer){

  socket.emit('sendCallOutToServer', currentPlayer, targetPlayer);
});

gameboard.on('coup', function(currentPlayer, targetPlayer){

  socket.emit('sendCoupToServer', currentPlayer, targetPlayer);
});

gameboard.on('income', function(currentPlayer, amount){

  socket.emit('sendIncomeToServer', currentPlayer, amount);
});

gameboard.on('allow', function(player, confirmation){

  socket.emit('sendAllowToServer', player, confirmation);
});

var socket = io(window.location.href);


socket.on('connect', function(){
	console.log("I joined the game!");
});

socket.on('sendActionToAll', function(start, end, strokeColor) {
  gameboard.draw(start, end, strokeColor);
});

whiteboard.on('draw', function(start, end, strokeColor){

  socket.emit('sendDrawToServer', start, end, strokeColor);
});


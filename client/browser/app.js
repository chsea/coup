
var socket = io(window.location.href);


socket.on('connect', function(){
	console.log("I joined the game!");
});

socket.on('sendDrawToAll', function(start, end, strokeColor) {
  whiteboard.draw(start, end, strokeColor);
});

whiteboard.on('draw', function(start, end, strokeColor){

  socket.emit('sendDrawToServer', start, end, strokeColor);
});


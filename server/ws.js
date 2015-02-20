module.exports = function (servidor){
  
  var sio = require('socket.io');
  var ws = sio.listen(servidor);
  
  ws.on('connection', function (socket){

  	  //-------------- Servidor a Cliente ---------\\
	  socket.emit('ready',{title: 'Ready'});
  
	  socket.emit('miSessionID',socket.id);

	  var myTimer = setInterval(function(){
	  	console.log('Pidiendo Id....'+socket.id);
	  	socket.emit('DameID',{title: 'DameID'});
	  },10000);

	  //-------------- Servidor a muchos clientes excepto a mi ---------\\


	  //-------------- Cliente a Servidor ---------\\
	  socket.on('recibeId',function(id){
	  		
	  });

  	  socket.on('disconnect', function() {
  	  	console.log('Limpiando el timer de '+socket.id);
		clearInterval(myTimer);
	  }); 

  });

	 

  
 
};

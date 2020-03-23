
const {io} = require('../server');


//con esto sabemos cuando un usuario se conecta al servidor
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //Escuhar mensaje del cliente. Primer param es el mensaje enviado desde el front
    //segundo param es el objeto o el cuerpo del mensaje que se esta escuchando
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if(mensaje.usuario){
        //     callback({
        //         resp: ' Todo salio OK'
        //     })
        // } else {
        //     callback({
        //         resp: 'todo salio Mal!!!!!!!'
        //     })
        // }
        
    })
})

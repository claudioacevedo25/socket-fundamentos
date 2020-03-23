  //aca definimos las funciones q se vana disparar cuando querramos mandar info al servidor 
        //o cuando querramos recibir info

        var socket = io();


        //esta nos indica cuando estoy conectado con el servidor es decir 
        //que exista un canal de comunicacion abierto entre el serv y el cliente
        socket.on('connect', function() {

                console.log('conectado al servidor')
            })
            //la funcion On son para escuchar
        socket.on('disconnect', function() {
            console.log('Perdimos conexion con el servidor')
        })

        //los emit Envian informacion al servidor de 1 a 1 
        socket.emit('enviarMensaje', {
            usuario: ' claudio ',
            mensaje: 'Hola a todos'
        }, function(resp) {
            console.log('Respuesta del server: ', resp)
        })

        //escuhar informacion desde el servidor
        socket.on('enviarMensaje', function(mensaje) {
            console.log('Servidor:', mensaje)
        })
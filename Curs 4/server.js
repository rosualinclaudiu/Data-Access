var WebSocketServer = require('ws').Server
ws = new WebSocketServer({port:40510})
ws.on('connection', function(ws){
    ws.on('message', function(message){
        console.log('mesaj primit de la client: ' + message)
    })

    ws.send('Asta e un mesaj din partea serverului catre client')
})
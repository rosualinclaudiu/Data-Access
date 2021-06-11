var http = require("http")

function start() {
    function onRequest(request, response) {
        response.writeHead(200, {"Content-type":"text/html"})
        response.write("Hello World from Module!")
        response.end()
    }

    var server = http.createServer(onRequest)
    server.listen(8886)
}

exports.start = start
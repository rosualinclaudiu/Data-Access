var express = require("express")
var cookieparser = require("cookie-parser")
var app = express()
app.use(cookieparser())
var port = 3000
app.get("/ceva", function(request, response){
    let options = {
        maxAge: 1000*30,
        httpOnly: true
    }

    response.cookie("nume2", "valoare", options)
    response.send("Hello from Node /ceva");
})

app.get("/altceva", function(request, response){
    response.send("Hello World from Node /Altceva")
})

app.listen(port, function() {
    response.send("Aplicatia functioneaza pe portul 3000")
})
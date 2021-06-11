var express = require("express")
var cookie_parser = require("cookie-parser")
var app = express()
app.use(cookie_parser())
var port = 3001
app.get("/ceva", function(request, response){
    let option = {
        maxAge: 1000*60*30,
        httpOnly: true
    }

    response.cookie("nume", "valoare", option)
    response.send("Hello from Node /ceva")
})

app.get("/altceva", function(request, response){

    console.log(request.cookiez)
    
    response.send("Hello from Node /altceva")
})

app.listen(port, function() {
    console.log("Aplicatia functioneaza pe portul" + port)
})
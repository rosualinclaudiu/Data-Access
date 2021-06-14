var express = require("express")
var app = express();
var port = 3000;
app.listen(port, function() {
    console.log("Alicatia functioneaza pe protul " + port)

})

var bodyParser = require("body-parser");
bodyParser.urlencoded ( {extended: true} )

var multer = require("multer");
var diskstorage = multer.diskStorage(
    {
        destination: './uploadedfiles',
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    }
)
var memoryStorage = multer.memoryStorage()
var upload = multer({storage: diskStorage})

app.use(bodyParser.json())


app.post("/upload", upload.single('myFile'), (request, response, next) => {
    // s-a facut o cerere
    var file = request.file
    if (!file){
        // eroare
        var error = new Error('Fisierul nu exista')
        next(error)
    }
    response.send(file)
})

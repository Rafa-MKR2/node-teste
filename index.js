var express = require('express')

var app = express();
var port = process.env.port || 8080;


app.get('/',function(req,res){
    res.end('Hello Word ===>')
})

app.listen(port);

console.log('==== Servidor Rodando ====' +port)

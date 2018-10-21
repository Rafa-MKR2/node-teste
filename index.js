var express = require('express')

var app = express();
var port = process.env.port || 3000;


app.get('/',function(req,res){
    res.end('hello word')
})

app.listen(port);

console.log('==== Servidor Rodando ====')

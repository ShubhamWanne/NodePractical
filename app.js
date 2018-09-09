const express = require("express");
const http = require("http");
const path = require("path");

var app = express();

app.set('appName','hello-world');
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'jade');

app.all('*',function(req,res){
    res.render(
        'index',
        {
            msg: 'Welcome to the practical Node-JS !'
        }
    );
});

http.createServer(app).listen(app.get('port'),function(){
    console.log(`Express server listening on port : ${app.get('port')}`);
});
var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');


module.exports = ()=>{
    var app = express();
    app.use(bodyParser.json());
    app.use(express.static('./public'));
    app.set('port', 3000);
    app.set('view engine', 'ejs');
    app.set('views', '../app/views');

    load('models', {cwd : 'app'})
        .then('controllers')
        .then('routes')
        .into(app);    
  


    return app;
}
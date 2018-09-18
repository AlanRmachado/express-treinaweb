var app = require('./config/express')();

app.listen(3000, ()=>{
    console.log(`Express server on port ${app.get('port')}`);
});
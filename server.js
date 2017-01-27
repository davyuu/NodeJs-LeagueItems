var express = require('express');
var todoController = require('./controller.js');

var app = express();

app.set('port', (process.env.PORT || 5000));

//fire controllers
todoController(app);

//listen to port
app.listen(app.get('port'), function(){
	console.log('Listening to port', app.get('port'));
})

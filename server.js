var express = require('express');
var controller = require('./controller.js');

var app = express();

app.set('port', (process.env.PORT || 5000));

//fire controllers
controller(app);

//listen to port
app.listen(app.get('port'), function(){
	console.log('Listening to port', app.get('port'));
})

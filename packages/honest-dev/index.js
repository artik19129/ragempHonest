require ('require-dir-all')(__dirname + '/commands');
require ('require-dir-all')(__dirname + '/events');
global.DB = require('./modules/DB');

DB.Connect(function (e) {
	if (!e) {
		console.log('DB connection success!');
	} else {
		console.log(`DB connection error - ${e}`)
	}
})
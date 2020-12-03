var mysql = require('mysql');

module.exports = {
	Handle: null,
	Connect: function(callback) {
		this.Handle = mysql.createPool({
			connectionLimit: 100,
			host: '127.0.0.1',
			user: 'root',
			password: 'root',
			database: 'ragemp',
			debug: false
		});
		callback();
	},
}
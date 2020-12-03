var md5 = require('md5');

mp.events.addCommand('register', (player, _, login, pass, rpass) =>{
	if (login == undefined || pass == undefined || rpass == undefined) return player.outputChatBox("/register [login] [pass] [rpass]");
	if (pass != rpass) return player.outputChatBox("Пароли не совпадают!")
	DB.Handle.query("INSERT INTO accounts (login,pass,socialClub,regIP,lastIP,regDate,lastDate) VALUES (?,?,?,?,?,NOW(),NOW())", [login, md5(rpass), player.socialClub, player.ip, player.ip], (e) => {
		if (e) {
		player.notify("~r~Произошла ошибка!");
		console.log(e);
		return;
		}
		player.notify("~g~Вы успешно зарегистрировались!");
	});
});

mp.events.addCommand('login', (player, _, login, pass) => {
	if (login == undefined || pass == undefined) return player.outputChatBox("/login [login] [pass]");
	DB.Handle.query("SELECT login,pass FROM accounts WHERE login=? AND pass=?", [login, md5(pass)], function(e, result) {
		if (result[0]){
			player.notify(`~g~Вы успешно авторизовались, ${login}`);
		} else {
			player.notify("~r~Н верный логин или пароль!")
		}
	})
})
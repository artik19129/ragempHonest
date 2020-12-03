mp.events.addCommand('sethp', (player, _, pid, hp) => {
	if (pid == undefined || hp == undefined) return player.outputChatBox('/sethp [player] [hp]');
	var p = mp.players.at(pid);
	if (p == null) return player.outputChatBox("Игрок с таким id не найден!");
	p.health = parseInt(hp);
})

mp.events.addCommand('setar', (player, _, pid, arm) => {
	if (pid == undefined || arm == undefined) return player.outputChatBox('/setar [player] [arm]');
	var p = mp.players.at(pid);
	if (p == null) return player.outputChatBox("Игрок с таким id не не найден!");
	p.armour = parseInt(arm);
})

mp.events.addCommand('veh', (player, _, pid, veh, color1, color2) => {
	if (pid == undefined || veh == undefined) return player.outputChatBox('/veh [id] [veh_id] [color1] [color2]');
	let id = mp.players.at(pid);
	if (id == null) return player.outputChatBox('~r~Игрок с таким id не найден!');
	var cVeh = player.getVariable('adminVeh' + player.id);
	if (cVeh != null) {
		cVeh.destroy();
	}
	let pos = id.position;
	pos.x += 2;
	var adminVeh = mp.vehicles.new(mp.joaat(veh), new mp.Vector3(pos.x, pos.y, pos.z));
	adminVeh.setColor(parseInt(color1), parseInt(color2))
	player.setVariable('adminVeh' + player.id, adminVeh);
})

mp.events.addCommand('fixveh', (player, _, id) => {
	if (id == undefined) {
		if (!player.vehicle) return player.notify('~r~Вы не в транспорте!');
		player.vehicle.repair();
	} else {
		let pid = mp.players.at(id);
		if (pid == null) return player.outputChatBox("Игрок с таким id не найден!");
		pid.vehicle.repair();
	}
})

mp.events.addCommand('pos', (player) => {
	let pos = player.position;
	player.outputChatBox(`X: ${pos.x}  Y: ${pos.y}  Z: ${z}`);
})

mp.events.addCommand('tppos', (player, x, y, z) => {
	if (x == undefined || y == undefined || z == undefined) return player.outputChatBox('/tppos [x] [y] [z]');
	player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
})

mp.events.addCommand('setweather', (player, _, weather) => {
	
})
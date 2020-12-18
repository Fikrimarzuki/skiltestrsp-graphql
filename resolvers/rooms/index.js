const { getRoom, getRooms } = require("./query");
const { addRoom, updateRoom, deleteRoom } = require("./mutation");

module.exports = {
	getRoom,
	getRooms,
	addRoom,
	updateRoom,
	deleteRoom
};
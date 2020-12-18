const { getUser, getUsers } = require("./query");
const { addUser, login, updateUser, deleteUser } = require("./mutation");

module.exports = {
	getUser,
	getUsers,
	addUser,
	login,
	updateUser,
	deleteUser
};
const {
	getRoom,
	getRooms,
	addRoom,
	updateRoom,
	deleteRoom
} = require("./rooms");

const {
	getUser,
	getUsers,
	addUser,
	login,
	updateUser,
	deleteUser
} = require("./users");

const {
	getBooking,
	getBookings,
	addBooking,
	updateBooking,
	deleteBooking
} = require("./bookings");

module.exports = {
	Query: {
		getRoom,
		getRooms,
		getUser,
		getUsers,
		getBooking,
		getBookings
	},
	Mutation: {
		addRoom,
		updateRoom,
		deleteRoom,
		addUser,
		login,
		updateUser,
		deleteUser,
		addBooking,
		updateBooking,
		deleteBooking
	}
}
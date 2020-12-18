const { getBooking, getBookings } = require("./query");
const { addBooking, updateBooking, deleteBooking } = require("./mutation");

module.exports = {
	getBooking,
	getBookings,
	addBooking,
	updateBooking,
	deleteBooking
};
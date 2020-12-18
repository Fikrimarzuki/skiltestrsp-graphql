const axios = require("../../config/expressApi");

module.exports = {
  addBooking: async (_, { input }) => {
		try {
			const { data } = await axios.post("bookings/", input);
			return data.ops[0];
		} catch(err) {
			console.log("Error", err);
		}
  },
  updateBooking: async (_, args) => {
		try {
			const id = args.id;
			const input = args.input;
			const { data } = await axios.put(`bookings/${id}`, input);
			return data.value;
		} catch(err) {
			console.log("Error", err);
		}
  },
  deleteBooking: async (_, { id }) => {
		try {
			const { data } = await axios.delete(`bookings/${id}`);
			return data.msg;
		} catch(err) {
			console.log("Error", err);
		}
  }
}
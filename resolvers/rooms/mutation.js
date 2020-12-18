const axios = require("axios");

module.exports = {
  addRoom: async (_, { input }) => {
		try {
			const { data } = await axios.post("rooms/", input);
			return data.ops[0];
		} catch(err) {
			console.log("error", err);
		}
  },
  updateRoom: async (_, args) => {
		try {
			const id = args.id;
			const input = args.input;
			const { data } = await axios.put(`rooms/${id}`, input);
			return data.value;
		} catch(err) {
			console.log("error", err);
		}
  },
  deleteRoom: async (_, { id }) => {
		try {
			const { data } = await axios.delete(`rooms/${id}`);
			return data.msg;
		} catch(err) {
			console.log("error", err);
		}
  }
}
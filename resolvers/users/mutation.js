const axios = require("../../config/expressApi");

module.exports = {
  addUser: async (_, { input }) => {
		try {
			const { data } = await axios.post('users/register', input);
			return data;
		} catch(err) {
			return err;
		}
	},
	login: async (_, { input }) => {
		try {
			const { data } = await axios.post("users/login", input);
			return data;
		} catch(err) {
			return err;
		}
  },
  updateUser: async (_, args) => {
		try {
			const id = args.id;
			const input = args.input;
			const { data } = await axios.put(`/${id}`, input);
			// console.log(data)
			return data.value;
		} catch(err) {
			console.log(err);
		}
  },
  deleteUser: async (_, { id }) => {
		try {
			const { data } = await axios.delete(`/${id}`);
			return data.msg;
		} catch(err) {
			console.log(err);
		}
  }
}
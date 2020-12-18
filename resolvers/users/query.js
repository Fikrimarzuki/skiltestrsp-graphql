const axios = require("../../config/expressApi"); 

module.exports = {
  getUsers: async () => {
		console.log("get users");
    try {
			const { data } = await axios.get("users/");
			return data;
    }
    catch (err){
      console.log("error", err);
    }
  },
  getUser: async (_, { id } ) => {
		console.log("get user");
		try {
			const { data } = await axios.get(`users/${id}`);
			return data;
		} catch(err) {
			console.log("error", err);
		}
  }
}
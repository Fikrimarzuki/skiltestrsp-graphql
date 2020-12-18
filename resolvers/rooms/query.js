const axios = require("../../config/expressApi");

module.exports = {
  getRooms: async () => {
    try {
			const { data } = await axios.get("rooms/");
			return data;
    }
    catch (err){
      console.log("error", err)
    }
  },
  getRoom: async (_, { id } ) => {
		try {
			const { data } = await axios.get(`rooms/${id}`);
			return data;
		} catch(err) {
			console.log("error", err);
		}
  }
}
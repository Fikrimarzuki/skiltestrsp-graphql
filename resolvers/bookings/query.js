const axios = require("../../config/expressApi");

module.exports = {
  getBookings: async () => {
    try {
			const { data } = await axios.get('bookings/');
			return data;
    } catch (err){
      console.log('error', err);
    }
  },
  getBooking: async (_, { id } ) => {
		try {
			const { data } = await axios.get(`bookings/${id}`);
			return data;
		} catch(err) {
			console.log("Error", err);
		}
  }
}
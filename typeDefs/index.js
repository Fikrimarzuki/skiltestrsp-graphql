const { gql } = require('apollo-server')

module.exports = typeDefs = gql`
  type User {
    _id: ID,
    email: String,
    password: String, 
    photo: String,
		created_at: String,
		updated_at: String,
		deleted_at: String
  }

  input AddUserInput {
    email: String,
    password: String, 
    photo: String
	}
	
	input LoginUserInput {
		email: String,
		password: String,
		photo: String
	}

  input updateUserInput {
    email: String,
    password: String, 
    photo: String
  }

  type Room {
    _id: ID,
    room_name: String,
    room_capacity: String, 
    photo: String,
		created_at: String,
		updated_at: String,
		deleted_at: String
  }

  input AddRoomInput {
    room_name: String,
    room_capacity: String, 
    photo: String
  }

  input updateRoomInput {
    room_name: String,
    room_capacity: String, 
    photo: String
	}
	
	type Booking {
    _id: ID,
    user_id: Int,
    room_id: Int, 
    total_person: Int,
		booking_time: String,
		noted: String,
		check_in_time: String,
		check_out_time: String,
		created_at: String,
		updated_at: String,
		deleted_at: String
  }

  input AddBookingInput {
    title: String,
    overview: String, 
    poster_path: String,
    popularity: Float,
    tags: [String]
  }

  input updateBookingInput {
    title: String,
    overview: String, 
    poster_path: String,
    popularity: Float,
    tags: [String]
  }

  type Query {
    getUsers: [User]
    getUser(id: ID): User
    getRooms: [Room]
		getRoom(id: ID): Room,
		getBookings: [Booking]
		getBooking(id: ID): Booking
  }

  type Mutation {
		addUser(input: AddUserInput): User
		login(input: LoginUserInput): User
    updateUser(id: ID, input: updateUserInput) : User
    deleteUser(id: ID): User
    addRoom(input: AddRoomInput): Room
    updateRoom(id: ID, input: updateRoomInput) : Room
		deleteRoom(id: ID): Room
		addBooking(input: AddBookingInput): Booking
    updateBooking(id: ID, input: updateBookingInput) : Booking
    deleteBooking(id: ID): Booking
  }
`
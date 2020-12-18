require("dotenv").config();
const { ApolloServer } = require("apollo-server");

const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

const server = new ApolloServer({ resolvers, typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})

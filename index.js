const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");

const schemaPath = importSchema("./schema/index.graphql");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs: schemaPath,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});

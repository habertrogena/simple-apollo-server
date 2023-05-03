import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import {typeDefs} from './schema.mjs';
import {resolvers} from './resolvers.mjs'


const API_PORT = 1995

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 1995 },
  });

  console.log(`🚀  Server ready at: ${url}`);
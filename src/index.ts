import { readFileSync } from 'node:fs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers/index';
import { MyContext, getMyContext } from './context';
import { UUIDDefinition } from 'graphql-scalars';

const typeDefs = [
  UUIDDefinition,
  readFileSync('./schema.graphql', { encoding: 'utf-8' }),
];

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  context: async ({ req }) => {
    return getMyContext(req.headers.authorization);
  },
}).then(({ url }) => console.log(`Server is listening at: ${url}`));

/// <reference path="./typings.d.ts"/>
import { ApolloServer } from 'apollo-server';
import fs from 'fs';
import path from 'path';
import { getMatch, getPlayers } from './database';

const typeDefs = fs.readFileSync(
  path.join(__dirname, 'schema.graphql'),
  'utf8'
);

const resolvers = {
  RootQueryType: {
    player(_: unknown, args: { id: string }, __: unknown) {
      const { id } = args;
      const player = getPlayers().find((v) => v.id === id);
      if (player === undefined) {
        throw new Error(`no player found with id: ${id}`);
      }

      return player;
    },
  },
};

const mocks = {
  Match: () => getMatch(),
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false,
});

server
  .listen({
    port: 3001,
    host: '0.0.0.0',
  })
  .then(({ url }) => {
    console.log(`🚀 Public mock graphql server ready at ${url}`);
  });

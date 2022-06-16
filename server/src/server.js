import { ApolloServer } from "apollo-server-koa";

import depthLimit from "graphql-depth-limit";

import resolvers from "./Graphql/resolvers";
import schema from "./Graphql/schema";

import Models from "./models/index";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  introspection: process.env.NODE_ENV !== "production",
  validationRules: [depthLimit(5)],
  context(request) {
    return {
      request,
      Models,
    };
  },
});

export default server;

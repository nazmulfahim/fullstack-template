import { gql } from "apollo-server-koa";

const Schema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [Schema];

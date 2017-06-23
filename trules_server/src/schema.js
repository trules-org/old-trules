import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Event {
  id: ID!                # "!" denotes a required field
  name: String
}

# This query specifies the entry points into our API.
type Query {
  events: [Event]
  event(id: String, name: String): Event
}


# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new channel to the list of channels
  addEvent(name: String!): Event
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };

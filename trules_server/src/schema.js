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
# This type specifies the entry points into our API. In this case
# there is only one - "events" - which returns a list of events.
type Query {
  events: [Event]    # "[]" means this is a list of business events
}

# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new channel to the list of channels
  addEvent(name: String!): Event
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };

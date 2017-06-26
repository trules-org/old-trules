import {
  makeExecutableSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type EventDef {
  id: ID!                # "!" denotes a required field
  name: String
}

# This query specifies the entry points into our API.
type Query {
  # Returns the list of event definitions
  eventDefs: [EventDef]
  # Returns the matching event definition
  eventDef(id: String, name: String): EventDef
}


# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new event to the list of events
  addEventDef(name: String!): EventDef
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };

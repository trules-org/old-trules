import {
  makeExecutableSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
# Defines a type of Event that the solution must handle
type EventDef {
  id: ID!                # "!" denotes a required field
  name: String
}

# Defines a type of object that the solution must interact with
type ObjectDef {
  id: ID!                # "!" denotes a required field
  name: String
}

# This query specifies the entry points into our solution API.
type Query {
  # Returns the list of event definitions
  eventDefs: [EventDef]
  # Returns the matching event definition
  eventDef(id: String, name: String): EventDef
  # Returns the list of object definitions
  objectDefs: [ObjectDef]
  # Returns the matching object definition
  objectDef(id: String, name: String): ObjectDef
}


# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new event to the list of events
  addEventDef(name: String!): EventDef
  # A mutation to add a new object definition to the list of object definitions
  addObjectDef(name: String!): ObjectDef
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };

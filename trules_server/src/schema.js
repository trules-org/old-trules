import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type BusinessEvent {
  id: ID!                # "!" denotes a required field
  name: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "businessEvents" - which returns a list of business events.
type Query {
  businessEvents: [BusinessEvent]    # "[]" means this is a list of business events
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };

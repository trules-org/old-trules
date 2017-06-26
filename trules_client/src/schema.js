export const typeDefs = `
type EventDef {
   id: ID!                # "!" denotes a required field
   name: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "eventDefs" - which returns a list of events.
type Query {
   eventDefs: [Event]    # "[]" means this is a list of event definitions
}
`;
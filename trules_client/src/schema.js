export const typeDefs = `
type Event {
   id: ID!                # "!" denotes a required field
   name: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "events" - which returns a list of events.
type Query {
   events: [Event]    # "[]" means this is a list of events
}
`;
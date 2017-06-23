const events = [{
  id: 1,
  name: 'Order Placed',
}, {
  id: 2,
  name: 'Order Canceled',
  }, {
  id: 3,
  name: 'Order Paused',
}];
let nextId = 4;

export const resolvers = {
  Query: {
    events: () => {
      return events;
    },
  },
  Mutation: {
    addEvent: (root, args) => {
      const newEvent = { id: nextId++, name: args.name };
      events.push(newEvent);
      return newEvent;
    },    
  },
};

import { Event } from './connectors';

let nextID = 100;

export const resolvers = {
  Query: {
    events: () => {
      return Event.findAll();
    },
    event: (_, args) => {
      return Event.find({ where: args });
    },
  },
  Mutation: {
    addEvent: (root, args) => {
      const newEvent = { id: nextID++ , name: args.name };
      Event.insertOrUpdate(newEvent);
      return newEvent;
    },    
  },
};

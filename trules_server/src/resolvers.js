import { EventDef } from './connectors';

let nextID = 100;

export const resolvers = {
  Query: {
    eventDefs: () => {
      return EventDef.findAll();
    },
    eventDef: (_, args) => {
      return EventDef.find({ where: args });
    },
  },
  Mutation: {
    addEventDef: (root, args) => {
      const newEventDef = { id: nextID++ , name: args.name };
      EventDef.insertOrUpdate(newEventDef);
      return newEventDef;
    },    
  },
};

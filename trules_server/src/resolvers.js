import { EventDef } from './connectors';
import { ObjectDef } from './connectors';

let nextID = 100;

export const resolvers = {
  Query: {
    eventDefs: () => {
      return EventDef.findAll();
    },
    eventDef: (_, args) => {
      return EventDef.find({ where: args });
    },
    objectDefs: () => {
      return ObjectDef.findAll();
    },
    objectDef: (_, args) => {
      return ObjectDef.find({ where: args });
    },

  },
  Mutation: {
    addEventDef: (root, args) => {
      const newEventDef = { id: nextID++ , name: args.name };
      EventDef.insertOrUpdate(newEventDef);
      return newEventDef;
    },    
    addObjectDef: (root, args) => {
      const newObjectDef = { id: nextID++ , name: args.name };
      ObjectDef.insertOrUpdate(newObjectDef);
      return newObjectDef;
    },    
  },
};

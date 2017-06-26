import Sequelize from 'sequelize';
import _ from 'lodash';

const db = new Sequelize('trules', null, null, {
  dialect: 'sqlite',
  storage: './trules.sqlite',
});

// EventDefs are the definitions of the Business Events that need to be handled by the solution
const EventDefModel = db.define('eventDef', {
  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING },
});

// Initialize the EventDefs in the db
db.sync({ force: true }).then(() => {
  _.times(1, () => {
    return EventDefModel.create({
      id: "1",
      name: "OrderPlaced",
    });
  });
});

const EventDef = db.models.eventDef;
export { EventDef };

// ObjectDefs are the definitions of the Business Objects that the solution interacts with
const ObjectDefModel = db.define('objectDef', {
  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING },
});

// Initialize the ObjectDefs in the db
db.sync({ force: true }).then(() => {
  _.times(1, () => {
    return ObjectDefModel.create({
      id: "1",
      name: "Order",
    });
  });
});

const ObjectDef = db.models.objectDef;
export { ObjectDef };
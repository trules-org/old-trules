import Sequelize from 'sequelize';
import _ from 'lodash';

const db = new Sequelize('trules', null, null, {
  dialect: 'sqlite',
  storage: './trules.sqlite',
});

const EventDefModel = db.define('eventDef', {
  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING },
});

// Initialize the db
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
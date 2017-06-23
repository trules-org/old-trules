import Sequelize from 'sequelize';
import _ from 'lodash';

const db = new Sequelize('trules', null, null, {
  dialect: 'sqlite',
  storage: './trules.sqlite',
});

const EventModel = db.define('event', {
  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING },
});

// Initialize the db
db.sync({ force: true }).then(() => {
  _.times(1, () => {
    return EventModel.create({
      id: "1",
      name: "OrderPlaced",
    });
  });
});

const Event = db.models.event;
export { Event };
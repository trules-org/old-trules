import Sequelize from 'sequelize';

// Set up the connection to the database
const Conn = new Sequelize(
    'trules',
    'root',
    'password',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

// Define Business Event
// What are the events that must be evaluated and responded to?
// Events must be Detected somehow
// When Detected, the Rules associated with the Event are evaluated.
const BEvent = Conn.define('bevent', {
    guid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

// Define Business Event Handling Rule
// When an event has been detected, how do you decide how to respond?
// Rules fire Actions based on logic applied to the current state of Business Objects.
const BEventHandlingRule = Conn.define('beventhandlingrule', {
    guid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

// Define the one-to-many Relationship between Event and EventHandlingRule
BEvent.hasMany(BEventHandlingRule);
BEventHandlingRule.belongsTo(BEvent);

// Define Business Object
// Business objects are "nouns" - Persons, places or things that are important to the business
// All types of Business Rules reference Business Objects in their expressions.
const BObject = Conn.define('bobject', {
    guid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

// Event handling rules reference many objects. Objects may be referenced by many event handling rules
BObject.belongsToMany(BEventHandlingRule, {through: 'BRuleObject'});
BEventHandlingRule.hasMany(BObject, {through: 'BRuleObject'});

// Define Business Action
// Actions are fired (initiated) by Rules that are triggered by Events
// Multiple Rules may cause an Action to be fired.
const BAction = Conn.define('action', {
    guid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

// Actions may be fired by many rules. Rules may fire many actions.
BAction.belongsToMany(BEventHandlingRule, {through: 'BRuleAction'});
BEventHandlingRule.hasMany(BAction, {through: 'BRuleAction'});
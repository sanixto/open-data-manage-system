const sequelize = require('./db');
const { Action,
  ActionType,
  AvailableAction,
  AvailableFor,
  Category,
  DataFile,
  DataSet,
  Grant,
  MetaDataKey,
  MetaDataValue,
  Role,
  State,
  Type,
  User } = require('./models/models');
 
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
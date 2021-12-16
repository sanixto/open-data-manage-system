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

function associate() {
  Type.hasMany(AvailableFor, {
    foreignKey: 'type',
    sourceKey: 'id'
  });
  
  AvailableFor.belongsTo(Type, {
    foreignKey: 'type',
    as: 'Type',
    targetKey: 'id'
  });

  MetaDataKey.hasMany(AvailableFor, {
    foreignKey: 'metaDataKey',
    sourceKey: 'id'
  });

  AvailableFor.belongsTo(MetaDataKey, {
    foreignKey: 'metaDataKey',
    as: 'MetaDataKey',
    targetKey: 'id'
  });

  MetaDataKey.hasMany(MetaDataKey, {
    foreignKey: 'metaDataKey',
    sourceKey: 'id'
  });

  MetaDataKey.belongsTo(MetaDataKey, {
    foreignKey: 'metaDataKey',
    as: 'MetaDataKey',
    targetKey: 'id'
  });

  MetaDataKey.hasMany(MetaDataValue, {
    foreignKey: 'metaDataKey',
    sourceKey: 'id'
  });

  MetaDataValue.belongsTo(MetaDataKey, {
    foreignKey: 'metaDataKey',
    as: 'MetaDataKey',
    targetKey: 'id'
  });

  DataFile.hasMany(MetaDataValue, {
    foreignKey: 'dataFile',
    sourceKey: 'id'
  });

  MetaDataValue.belongsTo(DataFile, {
    foreignKey: 'dataFile',
    as: 'DataFile',
    targetKey: 'id'
  });
  
  Category.hasMany(MetaDataValue, {
    foreignKey: 'category',
    sourceKey: 'id'
  });

  MetaDataValue.belongsTo(Category, {
    foreignKey: 'category',
    as: 'Category',
    targetKey: 'id'
  });

  Category.hasMany(Category, {
    foreignKey: 'category',
    sourceKey: 'id'
  });

  Category.belongsTo(Category, {
    foreignKey: 'category',
    as: 'Category',
    targetKey: 'id'
  });

  DataSet.hasMany(MetaDataValue, {
    foreignKey: 'dataSet',
    sourceKey: 'id'
  });

  MetaDataValue.belongsTo(DataSet, {
    foreignKey: 'dataSet',
    as: 'DataSet',
    targetKey: 'id'
  });

  DataSet.hasMany(DataFile, {
    foreignKey: 'dataFile',
    sourceKey: 'id'
  });

  DataFile.belongsTo(DataSet, {
    foreignKey: 'dataFile',
    as: 'DataFile',
    targetKey: 'id'
  });

  Category.hasMany(DataSet, {
    foreignKey: 'category',
    sourceKey: 'id'
  });

  DataSet.belongsTo(DataSeCategoryt, {
    foreignKey: 'category',
    as: 'Category',
    targetKey: 'id'
  });
  
  DataSet.hasMany(Grant, {
    foreignKey: 'dataSet',
    sourceKey: 'id'
  });

  Grant.belongsTo(DataSet, {
    foreignKey: 'dataSet',
    as: 'DataSet',
    targetKey: 'id'
  });

  User.hasMany(Grant, {
    foreignKey: 'user',
    sourceKey: 'id'
  });

  Grant.belongsTo(User, {
    foreignKey: 'user',
    as: 'User',
    targetKey: 'id'
  });

  Role.hasMany(Grant, {
    foreignKey: 'role',
    sourceKey: 'id'
  });

  Grant.belongsTo(Role, {
    foreignKey: 'role',
    as: 'Role',
    targetKey: 'id'
  });
  
  ActionType.hasMany(Grant, {
    foreignKey: 'actionType',
    sourceKey: 'id'
  });

  Grant.belongsTo(ActionType, {
    foreignKey: 'actionType',
    as: 'ActionType',
    targetKey: 'id'
  });

  Grant.hasMany(Action, {
    foreignKey: 'grant',
    sourceKey: 'id'
  });

  Action.belongsTo(Grant, {
    foreignKey: 'grant',
    as: 'Grant',
    targetKey: 'id'
  });
  
  Role.hasMany(AvailableAction, {
    foreignKey: 'role',
    sourceKey: 'id'
  });

  AvailableAction.belongsTo(Role, {
    foreignKey: 'role',
    as: 'Role',
    targetKey: 'id'
  });

  ActionType.hasMany(AvailableAction, {
    foreignKey: 'actionType',
    sourceKey: 'id'
  });

  AvailableAction.belongsTo(ActionType, {
    foreignKey: 'actionType',
    as: 'ActionType',
    targetKey: 'id'
  });

  Action.hasMany(ActionType, {
    foreignKey: 'action',
    sourceKey: 'id'
  });

  ActionType.belongsTo(Action, {
    foreignKey: 'action',
    as: 'Action',
    targetKey: 'id'
  });
  
  State.hasMany(ActionType, {
    foreignKey: 'state',
    sourceKey: 'id'
  });

  ActionType.belongsTo(State, {
    foreignKey: 'state',
    as: 'State',
    targetKey: 'id'
  });
  



  



}

module.exports = associate;
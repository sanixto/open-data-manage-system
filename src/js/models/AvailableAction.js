const sequelize = require('../DB/db');
const Sequelize = require('sequelize');

const AvailableAction = sequelize.define('AvailableAction', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    role: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    actionType: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true
  });

  module.exports = AvailableAction;
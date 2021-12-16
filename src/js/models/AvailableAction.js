const sequelize = require('../db');
const Sequelize = require('sequelize');

const AvailableAction = sequelize.define('availableAction', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    role: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id'
      }
    },
    actionType: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'actionType',
        key: 'id'
      }
    }
  });

  module.exports = AvailableAction;
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
      allowNull: false
    },
    actionType: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  module.exports = AvailableAction;
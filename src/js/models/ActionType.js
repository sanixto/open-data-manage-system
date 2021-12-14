const sequelize = require('../db');
const Sequelize = require('sequelize');

const ActionType = sequelize.define('actionType', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primeryKey: true
    },
    name: {
      type: Sequelize.STRING(255)
    },
    description: {
      type: Sequelize.STRING(255)
    }
  });

  module.exports = ActionType;
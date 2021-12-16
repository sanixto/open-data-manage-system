const sequelize = require('../DB/db');
const Sequelize = require('sequelize');

const ActionType = sequelize.define('actionType', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(255)
    },
    description: {
      type: Sequelize.STRING(255)
    }
  });

  module.exports = ActionType;
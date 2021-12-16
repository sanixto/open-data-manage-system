const sequelize = require('../db');
const Sequelize = require('sequelize');

const Action = sequelize.define('action', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    at: {
      type: Sequelize.DATE 
    },
    state: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    actionType: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    grant: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  module.exports = Action;
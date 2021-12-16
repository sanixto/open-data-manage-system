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
      allowNull: false,
      references: {
        model: 'state',
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
    },
    grant: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'grant',
        key: 'id'
      }
    }
  });

  module.exports = Action;
const sequelize = require('../db');
const Sequelize = require('sequelize');

const Grant = sequelize.define('grant', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primeryKey: true
    },
    user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    role: {
      type: Sequelize.INTEGER,
      references: {
        model: 'role',
        key: 'id'
      }
    },
    actionType: {
      type: Sequelize.INTEGER,
      references: {
        model: 'actionType',
        key: 'id'
      }
    },
    dataSet: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'dataSet',
        key: 'id'
      }
    }
  });

  module.exports = Grant;
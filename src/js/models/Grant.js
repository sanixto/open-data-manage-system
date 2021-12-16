const sequelize = require('../db');
const Sequelize = require('sequelize');

const Grant = sequelize.define('grant', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    role: {
      type: Sequelize.INTEGER
    },
    actionType: {
      type: Sequelize.INTEGER
    },
    dataSet: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  module.exports = Grant;
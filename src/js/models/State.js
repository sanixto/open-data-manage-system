const sequelize = require('../db');
const Sequelize = require('sequelize');

const State = sequelize.define('state', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(255)
    }
  });

  module.exports = State;
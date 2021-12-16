const sequelize = require('../db');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
    }
  });

  module.exports = User;
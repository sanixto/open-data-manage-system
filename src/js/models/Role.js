const sequelize = require('../db');
const Sequelize = require('sequelize');

const Role = sequelize.define('role', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primeryKey: true
    },
    name: {
      type: Sequelize.STRING(255),
    }
  });

  module.exports = Role;
const sequelize = require('../DB/db');
const Sequelize = require('sequelize');

const User = sequelize.define('User', {
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
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true
  });

  

  module.exports = User;
const sequelize = require('../db');
const Sequelize = require('sequelize');

const Type = sequelize.define('type', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    text: {
      type: Sequelize.STRING(45) 
    }
  });

  module.exports = Type;
const sequelize = require('../DB/db');
const Sequelize = require('sequelize');

const Type = sequelize.define('Type', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    text: {
      type: Sequelize.STRING(45) 
    }
  }, {
    sequelize,
    timestamps: false
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true
  });

  module.exports = Type;
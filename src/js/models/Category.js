const sequelize = require('../DB/db');
const Sequelize = require('sequelize');

const Category = sequelize.define('Category', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  category: {
    type: Sequelize.INTEGER
  } 
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true
});

module.exports = Category;
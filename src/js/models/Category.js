const sequelize = require('../db');
const Sequelize = require('sequelize');

const Category = sequelize.define('category', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: Sequelize.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  });

  module.exports = Category;
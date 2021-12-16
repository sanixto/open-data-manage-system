const sequelize = require('../db');
const Sequelize = require('sequelize');

const DataSet = sequelize.define('dataSet', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    category: {
      type: Sequelize.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  });

  module.exports = DataSet;
const sequelize = require('../db');
const Sequelize = require('sequelize');

const DataFile = sequelize.define('dataFile', {
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
    dataSet: {
      type: Sequelize.INTEGER,
      allowNull:false
    }
  });

  module.exports = DataFile;
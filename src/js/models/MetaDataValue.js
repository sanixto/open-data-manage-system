const sequelize = require('../db');
const Sequelize = require('sequelize');

const MetaDataValue = sequelize.define('metaDataValue', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: Sequelize.STRING(255),
    },
    metaDataKey: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    dataSet: {
        type: Sequelize.INTEGER
    },
    dataFile: {
      type: Sequelize.INTEGER
    },
    category: {
        type: Sequelize.INTEGER
      }
  });

  module.exports = MetaDataValue;
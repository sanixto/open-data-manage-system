const sequelize = require('../DB/db');
const Sequelize = require('sequelize');

const MetaDataValue = sequelize.define('MetaDataValue', {
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
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true
  });

  module.exports = MetaDataValue;
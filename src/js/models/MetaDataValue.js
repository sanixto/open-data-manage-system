const sequelize = require('../db');
const Sequelize = require('sequelize');

const MetaDataValue = sequelize.define('metaDataValue', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primeryKey: true
    },
    value: {
      type: Sequelize.STRING(255),
    },
    metaDataKey: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'metaDataKey',
        key: 'id'
      }
    },
    dataSet: {
        type: Sequelize.INTEGER,
        references: {
          model: 'dataSet',
          key: 'id'
        }
    },
    dataFile: {
      type: Sequelize.INTEGER,
      references: {
        model: 'dataFile',
        key: 'id'
      }
    },
    category: {
        type: Sequelize.INTEGER,
        references: {
          model: 'category',
          key: 'id'
        }
      }
  });

  module.exports = MetaDataValue;
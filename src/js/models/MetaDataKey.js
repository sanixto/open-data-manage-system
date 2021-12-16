const sequelize = require('../db');
const Sequelize = require('sequelize');

const MetaDataKey = sequelize.define('metaDataKey', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: Sequelize.STRING(255),
    },
    description: {
        type: Sequelize.STRING(511),
    },
    metaDataKey: {
      type: Sequelize.INTEGER,
    }
  });

  module.exports = MetaDataKey;
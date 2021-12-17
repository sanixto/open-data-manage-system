const sequelize = require('../DB/db');
const Sequelize = require('sequelize');

const MetaDataKey = sequelize.define('MetaDataKey', {
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
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true
  });

  module.exports = MetaDataKey;
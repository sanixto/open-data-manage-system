const sequelize = require('../DB/db');
const Sequelize = require('sequelize');

const AvailableFor = sequelize.define('AvailableFor', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    metaDataKey: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true
  });

  module.exports = AvailableFor;
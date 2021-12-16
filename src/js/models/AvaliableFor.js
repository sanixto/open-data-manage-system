const sequelize = require('../db');
const Sequelize = require('sequelize');

const AvailableFor = sequelize.define('availableFor', {
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
  });

  module.exports = AvailableFor;
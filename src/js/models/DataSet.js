const sequelize = require('../DB/db');
const Sequelize = require('sequelize');

const DataSet = sequelize.define('DataSet', {
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
      type: Sequelize.INTEGER
    }
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true
  });

  module.exports = DataSet;
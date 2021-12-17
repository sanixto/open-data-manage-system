const sequelize = require('../DB/db');
const Sequelize = require('sequelize');

const DataFile = sequelize.define('DataFile', {
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
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true
  });

  module.exports = DataFile;
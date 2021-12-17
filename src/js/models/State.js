const sequelize = require('../DB/db');
const Sequelize = require('sequelize');

const State = sequelize.define('State', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(255)
  }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true
});

  module.exports = State;
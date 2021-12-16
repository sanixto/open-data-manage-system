require('dotenv').config();

const { Sequelize } = require('sequelize');

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB = process.env.DB;

module.exports = new Sequelize(
  DB,
  DB_USER,
  DB_PASS,
  {
      host: DB_HOST,
      port: DB_PORT,
      dialect: 'mysql',
      logging: false,
      timestamps: false
  }
);
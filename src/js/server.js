const express = require('express');
const http = require('http');
const sequelize = require('./DB/db');
const associate = require('./DB/associate');

const app = express();
const hostname = 'localhost';
const port = 2000;

const server = http.createServer(app);

(async () => {
  associate();
  try {
    await sequelize.sync({force: true});
  }
  catch(err) {
    console.log('Error', err);
  }

  server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port} `);
  })
})();

const express = require('express');
const http = require('http');
const sequelize = require('./db');

const app = express();
const hostname = 'localhost';
const port = 2000;

const server = http.createServer(app);

sequelize.sync({force: true});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port} `);
})

// (async () => {
//   //   await sequelize.sync({force: true});

//   server.listen(port, hostname, () => {
//     console.log(`Server is running at http://${hostname}:${port} `);
//   })
// })();

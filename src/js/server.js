const express = require('express');
const http = require('http');
const sequelize = require('./DB/db');
const associate = require('./DB/associate');
const morgan = require('morgan');

const stateRouter = require('./routers/stateRouter');

const app = express();
const hostname = 'localhost';
const port = 2000;

app.use( morgan('dev') );
app.use( express.json() );

app.use('/states', stateRouter);

const server = http.createServer(app);

(async () => {
  try {
    associate();
    await sequelize.sync({force: true});
  }
  catch(err) {
    console.log('Error', err);
  }

  server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port} `);
  })
})();

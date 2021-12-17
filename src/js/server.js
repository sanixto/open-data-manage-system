const express = require('express');
const http = require('http');
const sequelize = require('./DB/db');
const associate = require('./DB/associate');
const morgan = require('morgan');

const stateRouter = require('./routers/stateRouter');
const actionRouter = require('./routers/actionRouter');

const app = express();
const hostname = 'localhost';
const port = 2000;

app.use( morgan('dev') );
app.use( express.json() );

app.use('/states', stateRouter);
app.use('/actions', actionRouter);

const server = http.createServer(app);

(async () => {
  try {
    associate();
    await sequelize.sync({force: false});
  }
  catch(err) {
    console.log('Error', err);
  }

  server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port} `);
  })
})();

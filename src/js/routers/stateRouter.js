const stateRouter = require('express').Router();
const { statesController, stateController}  = require('../controllers/State');

stateRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get(statesController.get)
  .post(statesController.post)
  .put(statesController.put)
  .delete(statesController.delete)

stateRouter.route('/:id')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get(stateController.get)
  .post(stateController.post)
  .put(stateController.put)
  .delete(stateController.delete)

module.exports = stateRouter;
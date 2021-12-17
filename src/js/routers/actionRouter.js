const actionRouter = require('express').Router();

const { actionsController, actionController} = require('../controllers/Action');

actionRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get(actionsController.get)
  .post(actionsController.post)
  .put(actionsController.put)
  .delete(actionsController.delete)

actionRouter.route('/:id')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get(actionController.get)
  .post(actionController.post)
  .put(actionController.put)
  .delete(actionController.delete)

module.exports = actionRouter;
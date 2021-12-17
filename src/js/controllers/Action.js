const { Action } = require('../models/models');

class ActionsController {
    get = async(req, res, next) => {
      try {
        Action.sync();  
        const actions = await Action.findAll();
        if (!actions) throw new Error('Actions don\'t exist');
        res.end('Will send all the actions to you! \n Actions: \n' + JSON.stringify(actions));
      } catch(err) {
        res.statusCode = 404;
        res.end('ERROR \n ' + err.message);  
      }
    }
    post = async(req, res, next) => {
      try {
        const action = await Action.create(req.body);
        if (!action) throw new Error('You have entered incorect data \n')
        res.end('Will add the action with id: ' + req.body.id);
      } catch(err){
        res.statusCode = 404;
        res.end('Will not add the action \n ERROR: \n' + err.message); 
      }
    }
    put = async(req, res, next) => {
      res.statusCode = 403;
      res.end('PUT operation not supported on /actions');
    }
    delete = async(req, res, next) => {
      try {
        const actions = await Action.findAll();
        if (!actions) throw new Error('Actions are empty');
        for (const action of actions) {
          await action.destroy();
        }  
        res.end('Deleting all actions');
      } catch(err) {
        res.statusCode = 404;
        res.end('ERROR:\n', err.message);
      }
    }
  }
  
  ///////////
  
  class ActionController {
    get = async(req, res, next) => {
      try {
        const action = await Action.findByPk(req.params.id);
        if (!action) throw new Error('The action with id: ' + req.params.id + ' doesn\'t exist');
        res.end('Will send details of the action:' + req.params.id + ' to you! \n' + JSON.stringify(action));
      } catch(err) {
        res.statusCode = 404;
        res.end('ERROR:  \n ' + err.message);  
      }
    }
    post = async(req, res, next) => {
      res.statusCode = 403;
      res.end('POST operation not supported on /actions/' + req.params.id);
    }
    put = async(req, res, next) => {
      try {
        const action = await Action.findByPk(req.params.id);
        if (!action) throw new Error('The action with id: ' + req.params.id + ' doesn\'t exist');
        await action.update(req.body);
        res.end('Will update the action with id: ' + req.params.id + '\n Updated action: \n' + JSON.stringify(action));
      } catch(err) {
        res.statusCode = 404;
        res.end('ERROR:  \n ' + err.message);  
      }
    }
    delete = async(req, res, next) => {
      try {
        const action = await Action.findByPk(req.params.id);
        if (!action) throw new Error('The action with id: ' + req.params.id + ' doesn\'t exist');
        action.destroy();
        res.end('Deleting the action with id: ' + req.params.id);
      } catch(err) {
        res.statusCode = 404;
        res.end('ERROR:  \n ' + err.message);  
      }
    }
  }
  
  module.exports = { 
    actionsController: new ActionsController,
    actionController: new ActionController
  };
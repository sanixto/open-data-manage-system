const State = require('../models/State');

class StatesController {
  get = async(req, res, next) => {
    try {
      const states = await State.findAll();
      if (!states) throw new Error('States don\'t exist');
      res.end('Will send all the states to you! \n States: \n' + JSON.stringify(states));
    } catch(err) {
      res.statusCode = 404;
      res.end('ERROR  \n ' + err.message);  
    }
  }
  post = async(req, res, next) => {
    try {
      const state = await State.create(req.body);
      if (!state) throw new Error('You have entered incorect data \n')
      res.end('Will add the state ' + req.body.name + ' with id: ' + req.body.id);
    } catch(err){
      res.statusCode = 404;
      res.end('Will not add the state \n ERROR: \n' + err.message); 
    }
  }
  put = async(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /states');
  }
  delete = async(req, res, next) => {
    try {
      const states = await State.findAll();
      if (!states) throw new Error('States are empty');
      for (const state of states) {
        await state.destroy();
      }  
      res.end('Deleting all states');
    } catch(err) {
      res.statusCode = 404;
      res.end('ERROR:\n', err.message);
    }
  }
}

///////////

class StateController {
  get = async(req, res, next) => {
    try {
      const state = await State.findByPk(req.params.id);
      if (!state) throw new Error('The state with id: ' + req.params.id + ' doesn\'t exist');
      res.end('Will send details of the dish:' + req.params.id + ' to you! \n' + JSON.stringify(state));
    } catch(err) {
      res.statusCode = 404;
      res.end('ERROR:  \n ' + err.message);  
    }
  }
  post = async(req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/' + req.params.id);
  }
  put = async(req, res, next) => {
    try {
      const state = await State.findByPk(req.params.id);
      if (!state) throw new Error('The state with id: ' + req.params.id + ' doesn\'t exist');
      await state.update(req.body);
      res.end('Will update the state with id: ' + req.params.id + '\n Updated state: \n' + JSON.stringify(state));
    } catch(err) {
      res.statusCode = 404;
      res.end('ERROR:  \n ' + err.message);  
    }
  }
  delete = async(req, res, next) => {
    try {
      const state = await State.findByPk(req.params.id);
      if (!state) throw new Error('The state with id: ' + req.params.id + ' doesn\'t exist');
      state.destroy();
      res.end('Deleting the dish:' + req.params.id);
    } catch(err) {
      res.statusCode = 404;
      res.end('ERROR:  \n ' + err.message);  
    }
  }
}

module.exports = { 
  statesController: new StatesController,
  stateController: new StateController
};
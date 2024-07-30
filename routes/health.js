const {Router} = require('express');
const {health} = require('../handler/health');

const healthRouter = Router();

healthRouter.get("/",health);

module.exports = healthRouter;
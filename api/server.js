const createError = require('http-errors'); //eslint-disable-line
const express = require('express');
const logger = require('morgan');

const Router = require('./routes/index');

const server = express();

server.use(logger('dev'));
server.use(express.json());

server.use('/api', Router);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

export default server;
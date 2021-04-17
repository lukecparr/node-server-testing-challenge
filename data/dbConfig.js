const knex = require('knex');
const config = require('../knexfile.js');

const environment = process.env.DB_ENV || 'development';

export default knex(config[environment]);
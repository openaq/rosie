'use strict';

console.log('Rosie is coming to life');

const moment = require('moment');
const knex = require('knex');
const knexConfig = require('./knexfile');
const pg = knex(knexConfig);

const numDays = process.env.NUM_DAYS || 90;

exports.handle = (e, ctx, cb) => {
  const oldDate = moment().subtract(numDays, 'days').format('YYYY-MM-DDTHH:mm:ss');
  const query = pg('measurements').whereRaw(`date_utc < '${oldDate}'`).del();
  console.log(query.toString());
  query
  .then(() => {
    return cb(null, 'done');
  })
  .catch((error) => {
    return cb(error);
  });
};

'use strict';
const Pg = require('pg');

const client = new Pg.Client();

console.log('Is pg instrumented?', client.query.toString().includes('wrapper'));

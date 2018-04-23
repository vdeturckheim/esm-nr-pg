'use strict';
import * as Pg from 'pg'

const client = new Pg.Client();

console.log('Is pg instrumented?', client.query.toString().includes('wrapper'));

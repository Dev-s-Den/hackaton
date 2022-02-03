const { Pool } = require('pg');
const dbParams = require('../lib/db')
const db = new Pool(dbParams);

db.connect(() => console.log('Connected to DB....'))

module.exports = db;
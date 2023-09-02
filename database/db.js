const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '6294862',
    database: 'users',
    host: 'localhost',
    port: 5432
});

module.exports = pool;
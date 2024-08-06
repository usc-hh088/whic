import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  host: 'db',
  database: 'mydatabase', //named database
  password: '8888', // pin
  port: 5432,
});

export default pool;
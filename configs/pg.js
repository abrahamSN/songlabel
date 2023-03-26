const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

// create a new table called labels
pool.query(`
    CREATE TABLE IF NOT EXISTS labels 
    (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, since DATE NOT NULL, city)`, (err, res) => {
    if (err) {
        console.log('Error creating table: ', err);
    } else {
        console.log('Table created');
    }
});

// create a new table called songs
pool.query(`
    CREATE TABLE IF NOT EXISTS songs
    (id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, year INT NOT NULL, label_id INT NOT NULL, FOREIGN KEY (label_id) REFERENCES labels(id))`, (err, res) => {
    if (err) {
        console.log('Error creating table: ', err);
    } else {
        console.log('Table created');
    }
});

pool.connect((err, client, done) => {
    if (err) {
        console.log('Error connecting to database: ', err);
    } else {
        console.log('Connected to database');
    }
});

module.exports = pool;

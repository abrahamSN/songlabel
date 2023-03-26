const pgPool = require('../configs/pg');

class Label {
    static getAll() {
        return pgPool.query('SELECT * FROM labels');
    }

    static getDetails() {
        return pgPool.query('SELECT * FROM labels');
    }
}

module.exports = Label;

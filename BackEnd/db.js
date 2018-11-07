var pgp = require('pg-promise')(/*options*/)

function connectDatabase() {
        db = pgp('postgres://postgres:reaper13@localhost:5565/Website02DB')
        return db;
}

module.exports = connectDatabase();
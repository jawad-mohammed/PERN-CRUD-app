const Pool = require("pg").Pool;

const pool = new  Pool({
    user:'postgres',
    host:'localhost',
    database:'enter your database name',
    password:'enter your password',
    port:'5432'
})

module.exports = pool

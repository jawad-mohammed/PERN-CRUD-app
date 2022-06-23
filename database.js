const Pool = require("pg").Pool;

const pool = new  Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'@Ravind95',
    port:'5432'
})

module.exports = pool
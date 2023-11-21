const {Pool} = require("pg")

const pool = new Pool({
    user:"postgres",
    password:"admintoor",
    database:"OLX.ba",
    host:"localhost",
    port:5432
})

module.exports = pool;
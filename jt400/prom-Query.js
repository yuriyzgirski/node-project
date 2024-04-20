const jt400 = require('node-jt400')

const config = {
    host: 'HIDDEN1',
    user: 'TVYZ',
    password: 'arjkld21',
}
const pool = jt400.pool(config)

const sql = 'SELECT * FROM TVYZSRC/TSTPF WHERE FILE LIKE(?)'
const clause = ['FIL%']

pool
    .query(sql, clause)
    .then(result => {
        const LIB = result[0].LIB
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
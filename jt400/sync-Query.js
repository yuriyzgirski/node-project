const config = {
    host: 'HIDDEN1',
    user: 'TVYZ',
    password: 'arjkld21',
}
const pool = require('node-jt400').pool(config)

const readTSTPF = async (name) => {
    const sql = 'SELECT * FROM TVYZSRC/TSTPF WHERE FILE = ?'
    const clause = [name]
    try {
        let results = await pool.query(sql, clause)
        console.log(results)
    } catch (error) {
        console.log(error)
    }
}

readTSTPF('FIL1')
readTSTPF('FIL2')
readTSTPF('FIL3')
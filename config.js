let Mysqli = require('mysqli')

let conn = new Mysqli({
    host: 'localhost', // IP/domain  
    port: 8889, //port, default 3306  
    user: 'root', // username
    passwd: 'root', // password
    charset: '', // CHARSET of database, default to utf8 【optional】
    db: 'bukudb' // the default database name  【optional】
})

let db = conn.emit()

module.exports = { db }
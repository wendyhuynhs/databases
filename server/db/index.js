let mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'chat'
});

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


connection.connect((err) => {
    if (err) {
        console.log('THERE IS AN ERROR', err)
    } else {
        console.log('CONNECTED')
    }
});

// connection.end();
module.exports = connection;
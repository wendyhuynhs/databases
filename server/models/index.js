//models
var db = require('../db');

module.exports = {
  messages: {
    get: (callback) => {
      db.query('select * from messages', (err, result) => {
        if (err) {
          callback(err)
        } else {
          callback(null, result)
        }
      })
    }, // a function which produces all the messages
    post: (body, callback) =>  {
      // const sql = db.query(`insert into messages set?`)
      // console.log(body, 'I got here');
      const sql = `INSERT INTO messages (id, username, message, roomname) VALUES ('${body.id}', '${body.username}', '${body.message}', '${body.roomname}')`;
      // console.log(sql);
      db.query(sql, (err, result) => {
        console.log(result)
        if (err) {
          callback(err)
        } else {
          callback(null, result);
        }
      }) 
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('select * from users', (err, results) => {
        if (err) {
          callback(err)
        } else {
          callback(null, results)
        }
      })
    },
    post: (body, callback) => {
      const sql = `INSERT INTO username (id, username) VALUES ('${body.id}', '${body.username}')`;
      db.query(sql, (err, result) => {
        if(err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    }
  }
};


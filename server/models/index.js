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
    post: (body, data, callback) =>  {
      console.log(body, 'I got here');
      db.query(`insert into messages (username, message, roomname) values (?,?,?)`, data, (err, result) => {
        if (err) {
          callback(err, 'ERR ORRRROROR')
        } else {
          callback(null, result, 'THE GOOD CALLBACK');
        }
      }) 
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


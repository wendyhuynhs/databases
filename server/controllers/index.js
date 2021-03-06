//controllers
var models = require('../models');

module.exports = {
  messages: {
    get: (req, res) => {
      models.messages.get((err, body) => {
        if (err) {
          res.status(404);
          res.send(err);
        } else {
          res.status(200);
          res.send(body);
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (err, body) => {
        // console.log(body);
        if (err) {
          res.status(404);
          res.send('data NOT created');
        } else {
          res.status(201);
          res.send('data created');
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.messages.get((err, body) => {
        if (err) {
          res.status(404)
          res.send("FAILED")
        } else {
          res.status(200)
          res.send(body)
        }
      })
    },
    post: function (req, res) {
      models.messages.post(req.body, (err, body) => {
        if (err) {
          res.status(404);
          res.send('FAILED');
        } else {
          res.status(201);
          res.send('data created');
        }
      });
    }
  }
};


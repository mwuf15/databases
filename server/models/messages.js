var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('select * from messages', (err, results) => {
      callback(err, results);
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    console.log('this is params:', params);
    db.query(`INSERT INTO messages (messages) values (${params})`, (err, results) => {
      callback(err, results);
    });
  } // a function which can be used to insert a message into the database
};

var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM users;', (err, result) => {
      if (err) {
        throw err;
      }
      callback(null, result);
    });
  },

  create: function (params, callback) {
    // console.log('users log', params);
    db.query('INSERT INTO users values (?);', (err, results) => {
      if (err) {
        throw err;
      }
      callback(null, results);
    });
  }
};

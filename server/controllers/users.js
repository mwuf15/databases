var models = require('../models');

module.exports = {
  get: function (req, res) {
    // console.log('this is req from get:',);
    // console.log('I want my params', req.body.names);
    models.users.getAll((err, result) => {
      // console.log(result);
      // res.end(result);
      console.log('invoked', result);
      res.send(result);
    });
  },
  post: function (req, res) {
    console.log('this is req from user:', res.json);
    models.users.create(req.body[names], (err, results) => {
      console.log('post users invoked result', results);
      res.json(results);
    });
  //   res.send();
  }
};
//this is similiar to the parse.js from chatterbox. Use of Ajax get and post requests.
// To add users to user table
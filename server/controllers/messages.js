var models = require('../models');

module.exports = {
  get: function (req, res) {
    // console.log('this is req from get:', req.body);
    models.messages.getAll((err, result) => {
      // callback(err, result);
      res.send(result);
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('this is req:', req.params);
    models.messages.create(req.params.message, (err, result) => {
      // callback(err, result);
      res.send(result);
    });
    // define the parameter req.body and breaking down
    // call models.create.messages
    // within post, we gonna have two arguments, the first is params we created, second is the callback, which take the err and results.
  } // a function which handles posting a message to the database
};

var triangulate = require('wifi-triangulate');

module.exports = function(callback) {
  triangulate(function(err, location) {
    if(err) {
      console.error(err);
      return callback({});
    }

    callback(location);
  });
}
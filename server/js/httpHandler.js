//Sets up the response codes and CORs headers.
const headers = require('./cors');

module.exports = (req, res) => {
  res.writeHead(200, headers);
  res.end();
};

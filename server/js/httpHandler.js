//Sets up the response codes and CORs headers.
const headers = require('./cors');

module.exports = (request, response) => {
  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  if (request.method === "GET") { //get a random direction
    console.log("GET method received");
    var statusCode = 200;
    headers['Content-Type'] = 'application/json';
    response.writeHead(statusCode, headers);
    var moves = ['left', 'right', 'down', 'up'];
    var random = moves[Math.floor(Math.random()*moves.length)];
    response.end(JSON.stringify(random));  //Response.end will send the data inside () back to the client

   } else if (request.method === "OPTIONS") { //standard options reply
    var statusCode = 200; //200 means OK
    headers['Content-Type'] = 'application/json';    // Tells the client what type of data we're sending
    response.writeHead(statusCode, headers); //writeHead fills out the headers of the respone
    response.end();
  } else {
    response.writeHead(400, headers); //bad request
    response.end();
  }

};
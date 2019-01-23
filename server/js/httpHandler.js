//Sets up the response codes and CORs headers.
const headers = require('./cors');
const msg = require('./messageQueue');

module.exports = (request, response) => {
  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  if (request.method === "GET") { //get a random direction
    console.log("GET method received");
    var statusCode = 200;
    headers['Content-Type'] = 'application/json';
    response.writeHead(statusCode, headers);

    let message = msg.dequeue();

    if (message !== undefined) {
      response.end(JSON.stringify(message));
    } else { //there were no commands
      response.end(JSON.stringify(null));
    }

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
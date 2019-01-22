/* Analysis:
 * This file initializes the keyPressHandler, which sets up the
 *  event listeners for key strokes.  See the file for details.
 * This file then initializes the node server (http.createServer),
 *  with address 127.0.0.1:3000
 *
 * */

require('./js/keypressHandler').initialize();
const handler = require('./js/httpHandler');

const http = require('http');
const server = http.createServer(handler);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);

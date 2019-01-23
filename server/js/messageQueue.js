/* This file appears to be a rough queue data structure
 * to keep track of all the moves that need to be done.
 *
 * See below for specific behavior (such as undefined when empty)
 * This will likely come in handy later
 */
const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  // console.log(`Enqueing message: ${message}`);
  messages.push(message);
  // console.log('all messages are: '+JSON.stringify(messages));
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};
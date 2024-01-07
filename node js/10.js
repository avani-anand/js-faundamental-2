const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Determine the current maximum number of listeners
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log('Current maximum number of listeners:', currentMaxListeners);

// Set the maximum number of listeners to 51
eventEmitter.setMaxListeners(5);

// Verify the updated maximum number of listeners
const updatedMaxListeners = eventEmitter.getMaxListeners();
console.log('Updated maximum number of listeners:', updatedMaxListeners);

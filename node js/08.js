// Create an events module (you can use the built-in EventEmitter class in Node.js)
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Subscribe to the "subscribe" event
eventEmitter.on('subscribe', () => {
  console.log('User has subscribed!');
});

// Simulate triggering the "subscribe" event (you can call this when a user subscribes)
function simulateSubscription() {
  // Trigger the "subscribe" event
  eventEmitter.emit('subscribe',"college wallah ! ");
}

// Call the function to simulate a user subscribing
simulateSubscription();













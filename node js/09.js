const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe', () => {
  console.log('User has subscribed!');
});

function simulateSubscription() {
  eventEmitter.emit('subscribe',"college wallah ! ");
}

simulateSubscription();


// Define an event handler
const myEventHandler = () => {
    console.log('Event handler is triggered!');
  };
  
  // Subscribe to the custom event 'myEvent'
  eventEmitter.on('myEvent', myEventHandler);
  
  // Call the event handler by emitting the event
  eventEmitter.emit('myEvent'); // Output: Event handler is triggered!
  
  // Remove the event handler
  eventEmitter.removeListener('myEvent', myEventHandler);
  
  // Try to call the event handler again
  eventEmitter.emit('myEvent'); // No output, as the event handler is removed
  
  
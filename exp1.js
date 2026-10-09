const EventEmitter = require('events');


// ===============================
// 1.2 EventEmitter - Basic Events
// ===============================

console.log("===== 1.2 Basic EventEmitter =====");

const A = new EventEmitter();

A.on('greet', (name) => {
    console.log(`Hello there ${name}`);
});

A.on('exit', (num) => {
    console.log(`Thank you for visiting ${num}`);
});

A.emit('greet', 'shristi');
A.emit('exit', 'us');


// ===============================
// 1.2 EventEmitter - Button
// ===============================

console.log("\n===== 1.2 Button EventEmitter =====");

class Button extends EventEmitter {
    click() {
        this.emit('click');
    }
}

const button = new Button();

button.on('click', (event) => {
    console.log('Button clicked');
});

button.click();


// ===============================
// 1.3 Event Loop
// ===============================

console.log("\n===== 1.3 Event Loop =====");

console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 2000);

setImmediate(() => {
    console.log('Immediate');
});

process.nextTick(() => {
    console.log('Next Tick');
});

console.log('Exit');rex
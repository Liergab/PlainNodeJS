// Read Evaluate Print Loop

import repl from 'repl';

const local = repl.start('Hello from repl.js');

local.on('exit', () => {
    console.log('exiting repl')
    process.exit()
})
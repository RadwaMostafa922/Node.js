// Importing the Required Modules
const fs = require('fs');
const readline = require('readline');

const file = readline.createInterface({
    input: fs.createReadStream('greet.txt'),
    output: process.stdout,
    terminal: false
});

file.on('line', (line) => {
    console.log(line);
});
// Import filesystem module
const fs = require('fs');
   
// List all the filenames before renaming
getCurrentFilenames();

fs.rename('test.txt', 'info.txt', () => {
    console.log("\nFile Renamed!\n");
     
    // List all the filenames after renaming
    getCurrentFilenames();
  });

// Function to get current filenames in directory
function getCurrentFilenames() {
    console.log("Current filenames:");
    fs.readdirSync(__dirname).forEach(file => {
      console.log(file);
    });
  }
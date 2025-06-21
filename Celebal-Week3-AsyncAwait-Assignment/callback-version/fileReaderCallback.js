// fileReaderCallback.js
const fs = require('fs');
const path = require('path');

// Define the path to the sample file
const filePath = path.join(__dirname, '../sample.txt');

// Read file using callback-based asynchronous method
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error reading the file:', err.message);
    return;
  }

  console.log('📄 File content using Callback:\n');
  console.log(data);
});

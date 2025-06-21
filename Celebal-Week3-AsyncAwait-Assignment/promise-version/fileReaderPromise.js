const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../sample.txt');

function readFilePromise(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readFilePromise(filePath)
  .then((data) => {
    console.log('📄 File content using Promises:\n', data);
  })
  .catch((err) => {
    console.error('❌ Error reading file:', err.message);
  });

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

async function readFileAsync() {
  try {
    const data = await readFilePromise(filePath);
    console.log('📄 File content using Async/Await:\n', data);
  } catch (err) {
    console.error('❌ Error reading file:', err.message);
  }
}

readFileAsync();

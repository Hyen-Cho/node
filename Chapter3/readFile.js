const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});

fs.writeFile('./writeme.txt', 'Hello Node.js', (err) => {
  if (err) {
    throw err;
  }
});
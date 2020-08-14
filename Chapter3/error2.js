// 노드 자체에서 잡아주는 방법
const fs = require('fs');

setInterval(() => {
  fs.unlink('./abcd.js', (err) => {
    if (err) {
      console.log(err);
    }
  });
}, 1000);
// listen 메서드에 콜백함수 대신 이벤트 리스너 사용
const http = require('http');

const server = http.createServer((req, res) => {        // createServer 반환 객체 : EventEmitter
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
});

server.listen(8080);
server.on('listening', () => {                          // 이벤트 리스너
  console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {
  console.error(error);
})
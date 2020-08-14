// listen() 에 콜백함수 등록 방식
const http = require('http');

http.createServer((req, res) => {         // req객체: 요청에 관한 정보, res객체: 응답에 관한 정보
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
}).listen(8080, () => {                   // 서버 연결
  console.log('8080번 포트에서 서버 대기 중입니다!');
});
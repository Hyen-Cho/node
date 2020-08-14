// 직접 쿠키를 만들어 요청자의 브라우저에 넣어보기
const http = require('http');

const parseCookies = (cookie = '') =>                           // 쿠키의 형태 aaa=bbb;ccc=fff를 {aaa:bbb, ccc:fff}와 같이 객체로 바꾸는 함수
  cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);             // req객체의 header에 담겨있는 cookie를 분석
  console.log(req.url, cookies);
  res.writeHead(200, { 'Set-cookie': 'mycookie=test' });        // res객체의 header에 쿠키 기록.(mycookie=test로 기록하라고 Set-cookie 명령)
  res.end('Hello Cookie');
})
  .listen(8082, () => {
    console.log('8082번 포트에서 서버 대기 중입니다!');
  })
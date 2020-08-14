// 모듈 가져오기
const fs = require('fs');

// 16b 크기로 읽기 스트림 만들기 (변수명: readStream)
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const data = [];

// 파일 읽기 시작 (버퍼 조각 data에 담고, 조각 및 조각크기 콘솔에 표시)
readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data: ', chunk, chunk.length);
});

// 파일 다 읽음 (버퍼 합치고 문자열로 변환해서 콘솔에 표시)
readStream.on('end', () => {
  console.log('end: ', Buffer.concat(data).toString());
});

// 에러가 발생할 경우 (콘솔에 에러 표시)
readStream.on('error', (err) => {
  console.log('error: ', err);
});
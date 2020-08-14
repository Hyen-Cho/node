const EventEmitter = require('events');
const http = require('http');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {          // 이벤트 리스닝(이밴트명과 콜백함수 연결)
  console.log('이벤트 1');
});
myEvent.on('event2', () => {                  // 이벤트 리스닝
  console.log('이벤트 2');
});
myEvent.on('event2', () => {                  // event2 이벤트에 콜백함수 추가
  console.log('이벤트2 추가');
});

myEvent.emit('event1');                       // 이벤트명과 연결된 콜백함수 호출
myEvent.emit('event2');

myEvent.once('event3', () => {                // 이벤트 리스닝(단한번만 호출됨)
  console.log('이벤트 3');
});

myEvent.emit('event3');                       // 두번 호출 안됨.
myEvent.emit('event3');

myEvent.on('event4', () => {
  console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');          // 이벤트 리스닝 삭제
myEvent.emit('event4');                       // 콜백 함수 실행 되지 않음.

const listener = () => {
  console.log('이벤트 5');
}

myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));  // 이벤트 리스닝 갯수
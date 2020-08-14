// throw로 에러를 던졌을 때 try catch로 에러를 잡아야 한다.
setInterval(() => {
  console.log('시작');
  try {
    throw new Error('서버를 고장내주마!');
  } catch (err) {
    console.log(err);
  }
}, 1000);
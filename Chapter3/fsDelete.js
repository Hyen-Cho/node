const fs = require('fs');

fs.readdir('./folder', (err, dir) => {
  if (err) {                                      // 해당 폴더가 없다면 에러
    throw err;
  }
  console.log('폴더 내용 확인', dir);
  fs.unlink('./folder/newFile.js', (err) => {
    if (err) {                                    // 파일이 없다면 에러
      throw err;
    }
    console.log('파일 삭제 성공');
    fs.rmdir('./folder', (err) => {
      if (err) {                                  // 폴더 안에 파일이 있다면 에러
        throw err;
      }
      console.log('폴더 삭제 성공');
    })
  });
});
function getUser() {                                            // 로딩 시 사용자가 가져오는 함수
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);
      var list = document.getElementById('list');
      list.innerHTML = '';
      Object.keys(users).map(function (key) {                   // users의 모든 키를 가져와서 하나의 키에 해당하는 div,span,button을 만듦
        var userDiv = document.createElement('div');
        var span = document.createElement('span');
        span.textContent = users[key];
        var edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', function () {            // 수정 버튼에 대한 click 이벤트
          var name = prompt('바꿀 이름을 입력하세요');
          if (!name) {
            return alert('이름을 반드시 입력하셔야 합니다');
          }
          var xhr = new XMLHttpRequest();
          xhr.onload = function () {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
              getUser();                                        // 왜 getUser 함수를 호출해줄까?    getUset(): 사용자 목록을 가져옴   /  사용자 목록을 가져와야 데이터를 보낼수 있으니까?
            } else {
              console.error(xhr.responseText);
            }
          };
          xhr.open('PUT', '/users/' + key);                      // 입력받은 값 서버로 보내기
          xhr.setRequestHeader('Content-Type', 'application/json');   // text가 아니라 왜 json형식인가?
          xhr.send(JSON.stringify({ name: name }));                 // name:name 은 뭘까? => 객체를 보내주고 있다.
        });
        var remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', function () {
          var xhr = new XMLHttpRequest();
          xhr.onload = function () {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
              getUser();
            } else {
              console.error(xhr.responseText);
            }
          }
          xhr.open('DELETE', '/users/' + key);
          xhr.send();
        });
        userDiv.appendChild(span);
        userDiv.appendChild(edit);
        userDiv.appendChild(remove);
        list.appendChild(userDiv);
      });
    } else {
      console.error(xhr.responseText);
    }
  }
  xhr.open('GET', '/users');
  xhr.send();
}
window.onload = getUser;                                          // 로딩시 호출

// 폼 제출
/* button의 기본 이벤트가 데이터를 보내는것인데 굳이 submit 이벤트를 걸어주는 이유는,,,,?
   => button 기본이벤트가 제출도있지만 페이지를 reload 하기 때문에 preventDefault()를 썼고 이로 인해 기본 이벤트인 제출도 없어졌기 때문에 */
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = e.target.username.value;
  if (!name) {
    return alert('이름을 입력하세요');
  }
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log(xhr.responseText);
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('POST', '/users');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ name: name }));
  e.target.username.value = '';
});
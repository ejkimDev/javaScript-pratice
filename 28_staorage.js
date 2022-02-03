const user = {
  name : 'Searchkim',
  age : 29,
  email : [
    'ejkim.Dev@gmail.com',
    'ejkim2@gmail.com'
  ]
};

localStorage.setItem('user', JSON.stringify(user));     // localStorage에 user 문자화시켜서 저장
console.log(JSON.parse(localStorage.getItem('user')));  // localStorage에 저장된 user를 객체화시켜서 출력
// localStorage.removeItem('user');                     // localStorage에 저장된 user 삭제

// localStorage에 저장된 user 수정하는 방법
const str = localStorage.getItem('user');   // user 가져옴
const obj = JSON.parse(str);                // user 객체화 
obj.age = 22;                               // 수정
console.log(obj);
localStorage.setItem('user', JSON.stringify(obj));    // 문자화시켜서 저장
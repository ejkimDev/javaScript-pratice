// 얕은 복사
const user = {
  name : 'Searchkim',
  age : 29,
  email : 'ejkim.Dev@gmail.com'
};

const copyUser = user;    // copyUser와 user는 같은 메모리 주소를 바라봄
console.log(copyUser === user);   // true

const asUser = Object.assign({}, user);   // user를 {}에 복사해서 넣음 -> 새로운 메모리 할당
console.log(asUser === user);     // false

const deUser = {...user};    // 전개 연산자 -> 새로운 메모리 할당
console.log(asUser === user);     // false

user.age = 22;
console.log('user', user);
console.log('copyUser', copyUser);
console.log('asUser', asUser);
console.log('deUser', deUser);
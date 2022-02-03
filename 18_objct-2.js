const user = {
  // key : value
  name : 'Searchkim',
  age : 29,
  email : 'ejkim.Dev@gmail.com'
};

// Object.keys() : 배열의 key 추출
const keys = Object.keys(user);
console.log(keys);

console.log(user.email);
console.log(user['email']);

// value 값 반환
const values = keys.map(key => user[key]);
console.log(values);
import myData from './myData.json'

console.log(myData);

const user = {
  name : 'Searchkim',
  age : 29,
  email : [
    'ejkim.Dev@gmail.com',
    'ejkim2@gmail.com'
  ]
};
console.log('user', user);

const str = JSON.stringify(user);   // user를 JSON의 형태로 문자데이터화 시킴
console.log('str', str);
console.log(typeof str);

const obj = JSON.parse(str);        // 문자 데이터를 분석해서 javascript에서 활용할 수 있는 객체 데이터화 시킴
console.log('obj', obj);
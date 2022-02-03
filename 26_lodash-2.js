import _ from 'lodash'

const users = [
  { userId : '1', name : 'SEARCHKIM'},
  { userId : '2', name : 'Neo'},
  { userId : '3', name : 'Amy'},
  { userId : '4', name : 'Evan'},
  { userId : '5', name : 'Lewis'}
]
const foundUser = _.find(users, { name : 'Amy'} );    // users에서 name이 Amy인 객체 데이터 찾기
const foundUserIndex = _.findIndex(users, { name : 'Amy' });    // users에서 name이 Amy인 객체의 인덱스번호 찾기
console.log(foundUser);
console.log(foundUserIndex);

_.remove(users, {name : 'SEARCHKIM'});    // users에서 name이 SEARCHKIM인 객체 데이터 삭제
console.log(users);
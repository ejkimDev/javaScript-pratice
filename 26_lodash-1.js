import _ from 'lodash'

const usersA = [
  { userId : '1', name : 'SEARCHKIM'},
  { userId : '2', name : 'Neo'}
]
const usersB = [
  { userId : '1', name : 'SEARCHKIM'},
  { userId : '3', name : 'Amy'}
]
const usersC = usersA.concat(usersB);   // 배열 병합
console.log('concat', usersC);
console.log('uniqBy', _.uniqBy(usersC,'userId'));   // userId 중복 제거 -> userId가 고유한 값만 반환

const usersD = _.unionBy(usersA, usersB, 'userId'); // 두개의 배열을 합치고 userId가 고유한 값만 반환
console.log('unionBy', usersD);
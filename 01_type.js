// 상대 경로가 없으면 node_modules에서 찾게된다.
import getType from './getType.js';      // getType.js 함수 가져오기

console.log(typeof 'Hello World!');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);    // 의도하지 않은 비어있는 값
console.log(typeof null);         // 의도해서 비어넣은 값
console.log(typeof {});           // 객체 데이터
console.log(typeof []);           // 배열 데이터

console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));
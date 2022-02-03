
// 원시 데이터 불변성
let a = 1;
let b = 4;
// a가 바라보는 메모리 주소(ex.1번지)와 b가 바라보는 메모리 주소(ex.2번지)가 다르기 때문에 false
console.log(a, b, a === b);
b = a;    // b는 a의 메모리 주소(1번지)를 바라보게 됨
console.log(a, b, a === b);     // true
a = 7;    // 7은 새로운 데이터기 때문에 a는 새로운 주소(3번지)를 바라보게 됨
console.log(a, b, a === b);
let c = 1;    // 1은 기존 데이터이기 떄문에 1번지를 바라봄
console.log(a, b, a === c);
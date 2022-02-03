// 참조 데이터 불변성
let a = {k : 1};
let b = {k : 1};
// a, b가 바라보는 메모리 주소가 다르다 > false
console.log(a, b, a === b);  
a.k = 7;
b = a;      // b는 a의 메모리 주소를 바라보게 됨 
console.log(a, b, a === b);   // true
a.k = 2;    // a, b는 같은 메모리 주소를 바라보기 때문에 둘다 k가 2가 됨
console.log(a, b, a === b);   // true
let c = b;  // c는 b의 메모리 주소를 바라보게 됨
console.log(a, b, a === c);
a.k = 9;    // a, b, c 모두 k가 9가 됨
console.log(a, b, a === c);
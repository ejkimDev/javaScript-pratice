// 산술 연산자(arithmetic operator)
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);   // 나머지 연산자

// 할당 연산자(assignment operator)
let x = 2;
x += 1;   // x = x + 1;
console.log(x);

// 비교 연산자(comparson operator)
const a = 1;
const b = 1;

function isEqual(x, y){
  return x === y;
}

console.log(isEqual(1,1));
console.log(isEqual(1,3));
console.log(isEqual(2,'2'));

console.log(a === b);   // 일치 연산자
console.log(a !== b);   // 불일치 연산자
console.log(a < b);     // 비교 연산자
console.log(a <= b);    // 비교 연산자 (=기호를 <기호보다 더 뒤에 써줘야한다!)

// 논리 연산자(logical operator)
const c = 1 === 1;
const d = 'AB' === 'AB';
const e = true;

console.log(c);
console.log(d);
console.log(e);

console.log('&& : ', c && d && e);    // && : AND 연산자(모두 true이면 true)
console.log('|| : ', c || d || e);    // || : OR 연산자(하나라도 true이면 true)

// 삼항 연산자(ternary operator)
const f = 1 < 2;

if(f) {
  console.log('참');
} else {
  console.log('거짓');
}

// f가 true이면 :앞의 값, false면 :뒤의 값
console.log(f ? '참' : '거짓');   

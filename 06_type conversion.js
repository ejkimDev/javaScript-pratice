// 형 변환(Type conversion)

const a = 1;
const b = '1';

console.log(a == b);    // 동등 연산자(형 변환이 일어나서 true)

if('false'){            // false라는 문자 데이터이므로 true
  console.log(123);
}
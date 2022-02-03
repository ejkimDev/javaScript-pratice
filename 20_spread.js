const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);
console.log(...fruits);     // 전개 연산자

function toObject(a, b, c) {     // ...c를 사용하면 나머지 모든 인수를 받아낼 수 있다.
  return {
    a : a,    // 속성의 이름과 변수의 이름이 같으면 축약형으로 사용할 수 있다. -> a,
    b,
    c
  }
}
// toObject 함수가 같은 기능을 하는 함수(화살표 함수를 이용해 축약)
const toObj = (a, b, c) => ({a, b, c});

// Apple -> a, Banana -> b, Cherry -> c 인수로 들어옴
console.log(toObject(...fruits));   
// 상단 코드와 같은 결과를 출력하지만 데이터가 많으면 매우 불편함
console.log(toObject(fruits[0], fruits[1], fruits[2]));    
console.log(toObj(...fruits));   
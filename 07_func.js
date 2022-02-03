// 화살표 함수
// () => {} vs function () {}

const double = function (x) {   // 변수 double에 익명함수 할당
  return x * 2;
}
console.log('double : ', double(7));

// 화살표 함수
const doubleArrow = (x) => {    
  return x * 2;
}
console.log('doubleArrow : ', doubleArrow(7));

// 축약형 화살표 함수
const doubleArrowRe = (x) => x * 2;     // x => x * 2; 도 가능
console.log('doubleArrowRe : ', doubleArrowRe(7));

// 객체 데이터도 소괄호로 감싸면 사용 가능
const doubleArrowObj = (x) => ({ name : 'SEARCHKIM'})    
console.log('doubleArrowObj : ', doubleArrowObj(7));

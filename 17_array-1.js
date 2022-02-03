const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

// .length : 길이 -> 배열 아이템 개수 추출
console.log('[.length]');      
console.log(numbers.length);      
console.log(fruits.length);
console.log([1, 2].length);
console.log([].length);

// .concat() : 두개의 배열 데이터를 병합해서 새로운 배열 데이터 반환(원본의 데이터는 영향 X)
console.log('[.concat()]');      
console.log(numbers.concat(fruits));
console.log(numbers);      
console.log(fruits);      

// .forEach() : 배열의 아이템 개수만큼 콜백함수가 반복적으로 실행
// (array는 참조용, forEach문에서 잘 사용하지 않음)
console.log('[.forEach()-1]');  
fruits.forEach(function (element, index, array) {   // 매갸변수 이름은 자유롭게 사용
  console.log(element, index, array);
})
console.log('[.forEach()-2]'); 
const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`);   // 보관을 이용한 문자 데이터
})
console.log(a);   // forEach에서 반환하는 게 없으므로 undefined

// .map() : 내부 콜백에서 반환된 데이터를 기준으로 새로운 배열 반환
console.log('[.map()]'); 
const b = fruits.map(function (fruit, index) {
  //return `${fruit}-${index}`;   // 보관을 이용한 문자 데이터
  return {
    i : index,
    name : fruit
  };    // 객체 반환
})
console.log(b);
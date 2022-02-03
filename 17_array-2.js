const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

// 원본 데이터와 배열 데이터의 아이템 개수가 같다.
const a = numbers.map(number =>{
  return number < 3;
});
const b = numbers.map(number => number < 3);
console.log(a);
console.log(b);

// .filter() : 배열 데이터의 아이템을 특정 기준(true)에 의해 필터링
console.log('[.filter()]'); 
const c = numbers.filter(number => {
  return number < 3;
});
const d = numbers.filter(number => number < 3);
console.log(c);
console.log(d);
// -> map, filter 모두 원본 배열 데이터에 영향이 없다.
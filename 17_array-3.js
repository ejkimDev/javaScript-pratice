const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

// .find() : 배열 데이터를 반복 실행하여 기준에 맞는 데이터를 찾음(true이면 반복이 종료됨)
// .test() : 일치하면 true, 불일치하면 false
// /^B/ : B로 시작하는 문자 데이터(정규표현식)
console.log('[.find()]'); 
const a = fruits.find(fruit => {    // fruits 배열 데이터 반복 실행
  return /^B/.test(fruit);    // B로 시작하면 true, 아니면 false
});
console.log(a);

// .findIndex() : 배열 데이터를 반복 실행하여 기준에 맞는 데이터의 index를 찾음(true이면 반복이 종료됨)
console.log('[.findIndex()]'); 
const b = fruits.findIndex(fruit => {    // fruits 배열 데이터 반복 실행
  return /^B/.test(fruit);    // B로 시작하면 true, 아니면 false
});
console.log(b);

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

// .includes() : 배열 데이터에 인수로 사용된 데이터 포함 여부 추출(true 또는 false)
console.log('[.includes()]'); 
const a = numbers.includes(3);
console.log(a);

const b = fruits.includes('SEARCHKIM');
console.log(b);

// .push() : 배열의 가장 뒤쪽에 인수 데이터를 삽입한다.
console.log('[.push()]'); 
numbers.push(5);
console.log(numbers);

// .unshift() : 배열의 가장 앞쪽에 인수 데이터를 삽입한다.
console.log('[.unshift()]'); 
numbers.unshift(0);
console.log(numbers);

// .reverse() : 배열의 아이템 순서가 뒤집어진다.
console.log('[.reverse()]'); 
numbers.reverse();
fruits.reverse();
console.log(numbers);
console.log(fruits);

// .splice(firstIndx, lasteIndex) : firstIndex 위치에서 아이템 lastIndex개를 지운다. 
// .splice(index1, index2, index3) : index1 위치에서 아이템 index2개를 지우고 그 자리에 index3를 끼워넣는다.  
console.log('[.splice()]'); 
numbers.splice(2, 2); // 2번 인덱스 위치에서 아이템 2개를 지운다.
console.log(numbers);
fruits.splice(2, 0, 999); // 2번 인덱스 위치에서 아이템 0개를 지우고 999라는 숫자를 그 자리에 끼워넣는다.
console.log(fruits);

// .push(), .unshift(), reverse(), splice() 모두 원본 배열 데이터를 수정한다.
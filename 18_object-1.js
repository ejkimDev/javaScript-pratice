const userAge = {
  // key : value
  name : 'Searchkim',
  age : 29
};

const userEmail = {
  name : 'Searchkim',
  email : 'ejkim.Dev@gmail.com'
}

// Object.assign(tarObj, srcObj1, srcObj2....) 
// : tarObj에 srcObjn의 속성을 복사해서 집어넣는다. 
const target = Object.assign(userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge);    // true

// 생긴 것은 같지만 다른 객체이다. 
const a = {k : 123};
const b = {k : 123};
console.log(a === b);    // false
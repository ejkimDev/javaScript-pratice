// 객체 구조 분해 할당
const user = {
  name : 'Searchkim',
  age : 29,
  email : 'ejkim.Dev@gmail.com'
};

// user라는 객체의 데이터를 구조 분해 해서 내가 원하는 데이터만 사용
// user에 없는 데이터라면 기본값을 지정해줄 수 있다.(gender = 'women') > user에 gender 데이터가 있다면 기본값은 무시된다.
// 객체에서 데이터를 꺼내올 때 그 변수 이름을 사용하되, 그 변수 이름을 사용하고 싶지 않다면
// '기존 변수이름' : '새로운 변수이름' 으로 지정하면 새로운 변수 이름을 사용할 수 있다. (name: search)
const { name: search, age, email, address, gender = 'women' } = user;

console.log(`사용자의 이름은 ${search}입니다.`);
console.log(`${name}의 나이는 ${age}입니다.`);
console.log(`${name}의 이메일 주소는 ${email}입니다.`);
console.log(address);     // adress는 user 내부에 존재하지 않기 때문에 undefined
console.log(gender);

// 배열 구조 분해 할당
const fruits = ['Apple', 'Banana', 'Cherry'];
const [a, b, c, d] = fruits;    // 순서대로 꺼내짐
const [, bb] = fruits;          // Banana만 추출하고 싶다면
console.log(bb);
console.log(a, b, c, d);        // 3번째 아이템은 존재하지 않기 때문에 d는 undefined

// 구조 분해 되는 데이터 타입에 맞게 사용해야한다.
// 객체는 {}, 배열은 []

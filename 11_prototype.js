// 리터럴 방식
// 속성, 메소드를 통들어서 멤버(Member)라고 부름.
const searchkim = {
  firstName : 'Search',         // 속성
  lastName : 'Kim',             // 속성
  getFullName : function () {   // 메소드
    return `${this.firstName} ${this.lastName}`;    // 데이터 보관
  }
}
console.log(searchkim.getFullName());

// 메모리를 효율적으로 관리하기위해 리터럴 방식이 아닌 JS 클래스를 만든다.
// 프로토타입을 사용해서 new를 통해 생성자 함수로 인스턴스를 만들어내는 것을 JavaScript 클래스라고 한다.
// (다른 프로그래밍 언어의 Class와는 다른 개념) 
function User(first, last) {    // 생성자 함수
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {        // prototype 속성에 함수를 만들어주면 메모리에 한번만 생성됨 
  return `${this.firstName} ${this.lastName}`;    // 데이터 보관
}

// new를 통해서 user 함수 실행 -> 생성자 함수 : 하나의 객체 데이터 생성
// 생성자 함수를 반환한 변수를 인스턴스라고 한다. (ex. search, amy, neo)
const search = new User('Search', 'Kim');
const amy = new User('Amy', 'Kim');
const neo = new User('Neo', 'Kim');

console.log(search);
console.log(search.getFullName());
console.log(amy.getFullName());
console.log(neo.getFullName());